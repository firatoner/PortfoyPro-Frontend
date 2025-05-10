"use client";

import { updateFullName } from "@/lib/api/user";
import { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function ProfilePage() {
  const { user, loading } = useUser();
  const [fullName, setFullName] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!loading && user) {
      setFullName(user.name || "");
    }
  }, [loading, user]);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateFullName(fullName);
      toast.success("✅ Değişiklikler kaydedildi", {
        description: "İsim soyisim başarıyla güncellendi.",
        duration: 2500,
      });
    } catch (err: any) {
      toast.error("❌ Güncellenemedi", {
        description: err.message,
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <p className="text-center text-muted-foreground p-6">Yükleniyor...</p>
    );
  }

  return (
    <div className="p-4 max-w-2xl space-y-6">
      {/* Ad Soyad */}
      <Card>
        <CardHeader>
          <CardTitle>İsim Soyisim</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label htmlFor="fullName">Ad Soyad</Label>
          <Input
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Button onClick={handleSave} className="w-full" disabled={saving}>
            {saving ? "Kaydediliyor..." : "Değişiklikleri Kaydet"}
          </Button>
        </CardContent>
      </Card>

      {/* E-posta */}
      <Card>
        <CardHeader>
          <CardTitle>E-posta</CardTitle>
        </CardHeader>
        <CardContent>
          <Input value={user?.email ?? ""} disabled />
        </CardContent>
      </Card>
    </div>
  );
}
