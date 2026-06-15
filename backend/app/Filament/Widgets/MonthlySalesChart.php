<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use App\Models\Sale;
use Illuminate\Support\Facades\DB;

class MonthlySalesChart extends ChartWidget
{
    protected static ?int $sort = 3;

    protected static ?string $pollingInterval = '10s';

    protected static bool $isLazy = false;

    protected static ?string $heading = 'Monthly Sales';

    protected function getData(): array
    {
        $sales = Sale::select(
            DB::raw('MONTH(sold_at) as month'),
            DB::raw('YEAR(sold_at) as year'),
            DB::raw('SUM(total_price) as total')
        )
            ->whereYear('sold_at', now()->year)
            ->groupBy('year', 'month')
            ->orderBy('month')
            ->get();

        $months = collect(range(1, 12))->map(function ($m) use ($sales) {
            $sale = $sales->firstWhere('month', $m);
            return $sale ? (float) $sale->total : 0;
        });

        $labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        return [
            'datasets' => [
                [
                    'label' => 'Revenue ($)',
                    'data' => $months->toArray(),
                    'backgroundColor' => '#3b82f6',
                    'borderColor' => '#2563eb',
                    'tension' => 0.4,
                    'fill' => true,
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }

    protected function getOptions(): array
    {
        return [
            'scales' => [
                'y' => [
                    'beginAtZero' => true,
                ],
            ],
            'plugins' => [
                'legend' => [
                    'display' => true,
                    'position' => 'top',
                ],
            ],
        ];
    }
}
