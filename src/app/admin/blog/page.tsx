'use client';

import { useEffect, useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';
import {
  FileText,
  Plus,
  Edit,
  Trash2,
  Eye,
  Calendar,
  Tag,
} from 'lucide-react';

interface Post {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: string;
  views: number;
  publishedAt?: string;
  createdAt: string;
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/admin/posts');
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm('Maqolani o\'chirmoqchimisiz?')) return;

    try {
      const response = await fetch(`/api/admin/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchPosts();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <AdminLayout>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black bg-gradient-text mb-2">Blog Maqolalar</h1>
          <p className="text-gray-400">Barcha blog maqolalarni boshqaring</p>
        </div>
        <Link href="/admin/blog/new">
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-primary hover:bg-gradient-hover text-white font-bold rounded-xl shadow-neon-cyan hover:shadow-[0_0_40px_rgba(0,255,242,0.6)] transition-all duration-300">
            <Plus className="w-5 h-5" />
            Yangi Maqola
          </button>
        </Link>
      </div>

      {/* Posts List */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-400">Yuklanmoqda...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-12 glass-effect border-2 border-neon-cyan/30 rounded-xl">
          <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400 mb-4">Hali maqolalar yo'q</p>
          <Link href="/admin/blog/new">
            <button className="px-6 py-3 bg-neon-cyan/10 border-2 border-neon-cyan text-neon-cyan font-bold rounded-lg hover:bg-neon-cyan/20 transition-colors">
              Birinchi maqolani yozing
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="glass-effect border-2 border-neon-cyan/30 rounded-xl p-6 hover:border-neon-cyan transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-black text-white">{post.title}</h3>
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/50">
                      {post.category}
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${
                        post.status === 'published'
                          ? 'bg-neon-green/20 text-neon-green border border-neon-green/50'
                          : 'bg-gray-700 text-gray-400 border border-gray-600'
                      }`}
                    >
                      {post.status === 'published' ? 'Nashr qilingan' : 'Qoralama'}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.createdAt).toLocaleDateString('uz-UZ')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {post.views} ko'rishlar
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm">
                    <span className="text-neon-cyan">Slug:</span> /blog/{post.slug}
                  </p>
                </div>

                <div className="flex gap-2 ml-4">
                  <Link href={`/blog/${post.slug}`} target="_blank">
                    <button className="p-2 bg-neon-blue/10 border-2 border-neon-blue/30 text-neon-blue rounded-lg hover:bg-neon-blue/20 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                  </Link>
                  <Link href={`/admin/blog/${post.id}`}>
                    <button className="p-2 bg-neon-cyan/10 border-2 border-neon-cyan/30 text-neon-cyan rounded-lg hover:bg-neon-cyan/20 transition-colors">
                      <Edit className="w-5 h-5" />
                    </button>
                  </Link>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="p-2 bg-red-500/10 border-2 border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
