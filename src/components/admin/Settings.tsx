import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import {
  User,
  Lock,
  Globe,
  Moon,
  Sun,
  Bell,
  Save,
  AlertTriangle,
  Check,
  Loader2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Settings = () => {
  // Form state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [language, setLanguage] = useState(
    () => localStorage.getItem("adminLanguage") || "fr",
  );
  const [theme, setTheme] = useState(
    () => localStorage.getItem("adminTheme") || "light",
  );
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [orderNotifications, setOrderNotifications] = useState(true);
  const [marketingNotifications, setMarketingNotifications] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  // UI state
  const [loading, setLoading] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [userId, setUserId] = useState("admin"); // In a real app, this would come from auth

  // Fetch user settings from Supabase on component mount
  useEffect(() => {
    const fetchUserSettings = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("user_settings")
          .select("*")
          .eq("user_id", userId)
          .single();

        if (error) {
          console.error("Error fetching settings:", error);
          // Only show error if it's not a 'not found' error
          if (error.code !== "PGRST116") {
            setSaveError("Erreur lors de la récupération des paramètres.");
          }
          return;
        }

        if (data) {
          // Update state with fetched data
          if (data.name) document.getElementById("name").value = data.name;
          if (data.email) document.getElementById("email").value = data.email;
          if (data.language) setLanguage(data.language);
          if (data.theme) {
            setTheme(data.theme);
            // Apply theme to document
            if (data.theme === "dark") {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          }
          if (data.email_notifications !== undefined)
            setEmailNotifications(data.email_notifications);
          if (data.order_notifications !== undefined)
            setOrderNotifications(data.order_notifications);
          if (data.marketing_notifications !== undefined)
            setMarketingNotifications(data.marketing_notifications);

          // Also update localStorage for fallback
          localStorage.setItem("adminLanguage", data.language || "fr");
          localStorage.setItem("adminTheme", data.theme || "light");

          console.log("User settings loaded successfully", data);
        }
      } catch (err) {
        console.error("Error in fetchUserSettings:", err);
        setSaveError("Erreur lors de la récupération des paramètres.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserSettings();
  }, [userId]);

  // Save account information to Supabase
  const saveAccountInfo = async () => {
    setSaveError("");
    setSaveSuccess(false);
    setLoading(true);

    try {
      // Get values from form
      const nameInput = document.getElementById("name") as HTMLInputElement;
      const emailInput = document.getElementById("email") as HTMLInputElement;
      const name = nameInput ? nameInput.value : "Administrateur";
      const email = emailInput
        ? emailInput.value
        : "admin@bijouterie-bendaoud.ma";

      const { error } = await supabase.from("user_settings").upsert(
        {
          user_id: userId,
          name,
          email,
          language,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" },
      );

      if (error) throw error;

      console.log("Account info saved successfully");
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving account info:", error);
      setSaveError(
        "Une erreur s'est produite lors de l'enregistrement des informations.",
      );
    } finally {
      setLoading(false);
    }
  };

  // Save appearance settings to Supabase
  const saveAppearanceSettings = async () => {
    setSaveError("");
    setSaveSuccess(false);
    setLoading(true);

    try {
      const { error } = await supabase.from("user_settings").upsert(
        {
          user_id: userId,
          theme,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" },
      );

      if (error) throw error;

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving appearance settings:", error);
      setSaveError(
        "Une erreur s'est produite lors de l'enregistrement des paramètres d'apparence.",
      );
    } finally {
      setLoading(false);
    }
  };

  // Save notification preferences to Supabase
  const saveNotificationPreferences = async () => {
    setSaveError("");
    setSaveSuccess(false);
    setLoading(true);

    try {
      const { error } = await supabase.from("user_settings").upsert(
        {
          user_id: userId,
          email_notifications: emailNotifications,
          order_notifications: orderNotifications,
          marketing_notifications: marketingNotifications,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" },
      );

      if (error) throw error;

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving notification preferences:", error);
      setSaveError(
        "Une erreur s'est produite lors de l'enregistrement des préférences de notification.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setPasswordSuccess(false);

    // Validate current password (in a real app, this would be checked against the server)
    if (currentPassword !== "admin123") {
      setPasswordError("Le mot de passe actuel est incorrect.");
      return;
    }

    // Validate new password
    if (newPassword.length < 8) {
      setPasswordError(
        "Le nouveau mot de passe doit contenir au moins 8 caractères.",
      );
      return;
    }

    // Validate password confirmation
    if (newPassword !== confirmPassword) {
      setPasswordError("Les mots de passe ne correspondent pas.");
      return;
    }

    setLoading(true);

    try {
      // In a real app, this would update the auth password
      // For demo purposes, we'll just store a password_last_changed timestamp
      const { error } = await supabase.from("user_settings").upsert(
        {
          user_id: userId,
          password_last_changed: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        { onConflict: "user_id" },
      );

      if (error) throw error;

      setPasswordSuccess(true);
      setTimeout(() => setPasswordSuccess(false), 3000);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Error updating password:", error);
      setPasswordError(
        "Une erreur s'est produite lors de la mise à jour du mot de passe.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Paramètres</h1>
        <p className="text-muted-foreground">
          Gérez vos préférences et paramètres de compte
        </p>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="account">
            <User className="h-4 w-4 mr-2" /> Compte
          </TabsTrigger>
          <TabsTrigger value="appearance">
            <Moon className="h-4 w-4 mr-2" /> Apparence
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" /> Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations du Compte</CardTitle>
              <CardDescription>
                Mettez à jour vos informations personnelles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                <Input id="name" defaultValue="Administrateur" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="admin@bijouterie-bendaoud.ma" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Langue</Label>
                <Select
                  value={language}
                  onValueChange={(value) => {
                    setLanguage(value);
                    localStorage.setItem("adminLanguage", value);
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez une langue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="ar">العربية</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              {saveSuccess && (
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-3 rounded-md mb-4 flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Modifications enregistrées avec succès.
                </div>
              )}
              {saveError && (
                <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-3 rounded-md mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  {saveError}
                </div>
              )}
              <Button
                className="bg-amber-600 hover:bg-amber-700 text-white"
                onClick={saveAccountInfo}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />{" "}
                    Enregistrement...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" /> Enregistrer les
                    modifications
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changer le Mot de Passe</CardTitle>
              <CardDescription>
                Mettez à jour votre mot de passe pour sécuriser votre compte
              </CardDescription>
            </CardHeader>
            <CardContent>
              {passwordSuccess && (
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-3 rounded-md mb-4 flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Votre mot de passe a été modifié avec succès.
                </div>
              )}
              {passwordError && (
                <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-3 rounded-md mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  {passwordError}
                </div>
              )}
              <form onSubmit={handlePasswordChange} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Mot de passe actuel</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="current-password"
                      type="password"
                      className="pl-10"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-password">Nouveau mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="new-password"
                      type="password"
                      className="pl-10"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Le mot de passe doit contenir au moins 8 caractères
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">
                    Confirmer le mot de passe
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="confirm-password"
                      type="password"
                      className="pl-10"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" /> Mise à
                      jour...
                    </>
                  ) : (
                    <>Mettre à jour le mot de passe</>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Zone de Danger</CardTitle>
              <CardDescription>
                Actions irréversibles pour votre compte
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive">
                    <AlertTriangle className="h-4 w-4 mr-2" /> Supprimer le
                    compte
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Êtes-vous absolument sûr ?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Cette action est irréversible. Elle supprimera
                      définitivement votre compte et toutes les données
                      associées.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600 hover:bg-red-700">
                      Supprimer le compte
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Thème</CardTitle>
              <CardDescription>
                Personnalisez l'apparence de l'interface d'administration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                  className={`border rounded-md p-4 cursor-pointer transition-all ${theme === "light" ? "border-amber-600 bg-amber-50 dark:bg-amber-900/20" : ""}`}
                  onClick={() => {
                    setTheme("light");
                    localStorage.setItem("adminTheme", "light");
                    document.documentElement.classList.remove("dark");
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Sun className="h-5 w-5 text-amber-600" />
                      <h3 className="font-medium">Mode Clair</h3>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 ${theme === "light" ? "border-amber-600 bg-amber-600" : "border-gray-300"}`}
                    >
                      {theme === "light" && (
                        <Check className="h-4 w-4 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="bg-white border rounded-md p-3 shadow-sm">
                    <div className="h-2 w-1/2 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-3/4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-2 w-1/3 bg-gray-200 rounded"></div>
                  </div>
                </div>

                <div
                  className={`border rounded-md p-4 cursor-pointer transition-all ${theme === "dark" ? "border-amber-600 bg-amber-50 dark:bg-amber-900/20" : ""}`}
                  onClick={() => {
                    setTheme("dark");
                    localStorage.setItem("adminTheme", "dark");
                    document.documentElement.classList.add("dark");
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Moon className="h-5 w-5 text-amber-600" />
                      <h3 className="font-medium">Mode Sombre</h3>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 ${theme === "dark" ? "border-amber-600 bg-amber-600" : "border-gray-300"}`}
                    >
                      {theme === "dark" && (
                        <Check className="h-4 w-4 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="bg-gray-800 border border-gray-700 rounded-md p-3 shadow-sm">
                    <div className="h-2 w-1/2 bg-gray-600 rounded mb-2"></div>
                    <div className="h-2 w-3/4 bg-gray-600 rounded mb-2"></div>
                    <div className="h-2 w-1/3 bg-gray-600 rounded"></div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {saveSuccess && (
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-3 rounded-md mb-4 flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Thème appliqué avec succès.
                </div>
              )}
              {saveError && (
                <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-3 rounded-md mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  {saveError}
                </div>
              )}
              <Button
                className="bg-amber-600 hover:bg-amber-700 text-white"
                onClick={saveAppearanceSettings}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />{" "}
                    Enregistrement...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" /> Appliquer le thème
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Préférences de Notification</CardTitle>
              <CardDescription>
                Configurez comment et quand vous souhaitez être notifié
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">
                    Notifications par email
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Recevez des notifications par email pour les activités
                    importantes
                  </p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="order-notifications">
                    Nouvelles commandes
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Soyez notifié lorsqu'une nouvelle commande est passée
                  </p>
                </div>
                <Switch
                  id="order-notifications"
                  checked={orderNotifications}
                  onCheckedChange={setOrderNotifications}
                />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing-notifications">
                    Mises à jour marketing
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Recevez des conseils et mises à jour sur l'optimisation de
                    votre boutique
                  </p>
                </div>
                <Switch
                  id="marketing-notifications"
                  checked={marketingNotifications}
                  onCheckedChange={setMarketingNotifications}
                />
              </div>
            </CardContent>
            <CardFooter>
              {saveSuccess && (
                <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 p-3 rounded-md mb-4 flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  Préférences enregistrées avec succès.
                </div>
              )}
              {saveError && (
                <div className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 p-3 rounded-md mb-4 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  {saveError}
                </div>
              )}
              <Button
                className="bg-amber-600 hover:bg-amber-700 text-white"
                onClick={saveNotificationPreferences}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />{" "}
                    Enregistrement...
                  </>
                ) : (
                  <>
                    <Save className="h-4 w-4 mr-2" /> Enregistrer les
                    préférences
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
