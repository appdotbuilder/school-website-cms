<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\News;
use Inertia\Inertia;

class NewsController extends Controller
{
    /**
     * Display a listing of news.
     */
    public function index()
    {
        $news = News::published()
            ->with('author')
            ->latest('published_at')
            ->paginate(12);

        return Inertia::render('news/index', [
            'news' => $news,
        ]);
    }

    /**
     * Display the specified news article.
     */
    public function show(News $news)
    {
        // Only show published news to public
        if ($news->status !== 'published') {
            abort(404);
        }

        $news->load('author');
        $relatedNews = News::published()
            ->where('id', '!=', $news->id)
            ->latest('published_at')
            ->take(3)
            ->get();

        return Inertia::render('news/show', [
            'news' => $news,
            'relatedNews' => $relatedNews,
        ]);
    }
}