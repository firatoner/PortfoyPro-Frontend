"use client";

import { useEffect, useState } from "react";
import { fetchWithAuth } from "@/lib/fetchWithAuth";
import { supabase } from "@/lib/supabaseClient";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function MyPortfoliosPage() {
  const [portfolios, setPortfolios] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPortfolio, setCurrentPortfolio] = useState<any>(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const load = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (!session) return;
      const res = await fetchWithAuth(`${BASE}/portfolios`);
      const data = await res.json();
      setPortfolios(data);
    };
    load();
  }, []);

  const refresh = async () => {
    const res = await fetchWithAuth(`${BASE}/portfolios`);
    const data = await res.json();
    setPortfolios(data);
  };

  const openCreateModal = () => {
    setIsEditing(false);
    setName("");
    setDescription("");
    setShowForm(true);
  };

  const openEditModal = (portfolio: any) => {
    setIsEditing(true);
    setCurrentPortfolio(portfolio);
    setName(portfolio.name);
    setDescription(portfolio.description || "");
    setShowForm(true);
  };

  const handleSubmit = async () => {
    if (!name.trim())
      return toast({
        title: "Hata",
        description: "İsim boş olamaz",
        variant: "destructive",
      });

    const endpoint = isEditing
      ? `${BASE}/portfolios/${currentPortfolio.id}`
      : `${BASE}/portfolios`;

    const method = isEditing ? "PUT" : "POST";

    const res = await fetchWithAuth(endpoint, {
      method,
      body: JSON.stringify({ name, description }),
    });

    if (!res.ok) {
      const err = await res.json();
      return toast({
        title: "Hata",
        description: err.message,
        variant: "destructive",
      });
    }

    toast({
      title: isEditing ? "Güncellendi" : "Oluşturuldu",
      description: `Portföy başarıyla ${
        isEditing ? "güncellendi" : "oluşturuldu"
      }.`,
    });

    setShowForm(false);
    await refresh();
  };

  const handleDelete = async (id: number) => {
    const confirmed = confirm("Bu portföyü silmek istiyor musun?");
    if (!confirmed) return;

    const res = await fetchWithAuth(`${BASE}/portfolios/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      return toast({
        title: "Hata",
        description: "Silinemedi",
        variant: "destructive",
      });
    }

    toast({ title: "Silindi", description: "Portföy başarıyla silindi." });
    await refresh();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Portföylerim</h1>
        <Button onClick={openCreateModal}>Portföy Ekle</Button>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {portfolios.map((p) => (
          <div
            key={p.id}
            className="border p-4 rounded-xl bg-white dark:bg-gray-900 shadow hover:shadow-md transition"
          >
            <h2 className="font-semibold text-lg">{p.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {p.description}
            </p>
            <div className="flex gap-4 mt-4">
              <Button variant="outline" onClick={() => openEditModal(p)}>
                Düzenle
              </Button>
              <Button variant="destructive" onClick={() => handleDelete(p.id)}>
                Sil
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {isEditing ? "Portföyü Düzenle" : "Yeni Portföy"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Ad</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="desc">Açıklama</Label>
              <Textarea
                id="desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Button onClick={handleSubmit}>
              {isEditing ? "Kaydet" : "Oluştur"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
