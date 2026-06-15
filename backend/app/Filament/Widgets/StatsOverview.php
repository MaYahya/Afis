<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use App\Models\Product;
use App\Models\Category;
use App\Models\Client;
use App\Models\Sale;

class StatsOverview extends BaseWidget
{
    protected static ?int $sort = 1;

    protected static ?string $pollingInterval = '10s';

    protected static bool $isLazy = false;

    protected function getStats(): array
    {
        $monthlySales = Sale::whereMonth('sold_at', now()->month)
            ->whereYear('sold_at', now()->year)
            ->sum('total_price');

        return [
            Stat::make('Total Products', Product::count())
                ->description('All products in inventory')
                ->descriptionIcon('heroicon-m-cube')
                ->color('primary')
                ->chart([7, 3, 10, 5, 15, 8, 12]),

            Stat::make('Categories', Category::count())
                ->description('Product & service categories')
                ->descriptionIcon('heroicon-m-tag')
                ->color('success')
                ->chart([2, 5, 3, 7, 4, 6, 8]),

            Stat::make('Clients', Client::count())
                ->description('Registered clients')
                ->descriptionIcon('heroicon-m-users')
                ->color('warning')
                ->chart([1, 3, 2, 5, 4, 7, 6]),

            Stat::make('Monthly Sales', '$' . number_format($monthlySales, 2))
                ->description('Revenue this month')
                ->descriptionIcon('heroicon-m-currency-dollar')
                ->color('info')
                ->chart([4, 6, 8, 5, 10, 7, 9]),
        ];
    }
}
