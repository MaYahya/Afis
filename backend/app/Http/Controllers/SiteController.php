<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Client;
use App\Models\Banner;
use App\Models\Setting;
use App\Mail\InquiryMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;

class SiteController extends Controller
{
    public function getSiteData()
    {
        $data = Cache::remember('site_data', 3600, function () {
            return [
                'categories' => Category::where('is_active', true)->orderBy('order')->get(),
                'products' => Product::with('category')->where('is_active', true)->get(),
                'featured_products' => Product::with('category')->where('is_active', true)->where('is_featured', true)->orderBy('updated_at', 'desc')->get(),
                'clients' => Client::where('is_active', true)->orderBy('order')->get(),
                'banners' => Banner::where('is_active', true)->orderBy('order')->get(),
                'settings' => Setting::all()->pluck('value', 'key'),
            ];
        });

        return response()->json($data);
    }

    public function submitInquiry(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'company' => 'nullable|string|max:255',
            'phone' => 'required|string|max:50',
            'email' => 'required|email|max:255',
            'product' => 'nullable|string|max:255',
            'message' => 'nullable|string',
        ]);

        $recipients = [
            'proafis77@gmail.com',
        ];

        try {
            foreach ($recipients as $recipient) {
                Mail::to($recipient)->send(new InquiryMail($validated));
            }

            return response()->json([
                'success' => true,
                'message' => 'Your inquiry has been submitted successfully. We will contact you shortly.',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to send inquiry. Please try again later.',
            ], 500);
        }
    }
}
