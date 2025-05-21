import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { useSettingsStore } from "@/store/useSettingsStore";
import { useEffect, useState } from "react";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type FormData = z.infer<typeof schema>

export default function Settings() {
  const { savedData, setSavedData } = useSettingsStore()
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  )

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    if (savedData) {
      setValue("name", savedData.name);
      setValue("email", savedData.email);
      setValue("password", savedData.password);
    }
  }, [savedData, setValue])

  const onSubmit = (data: FormData) => {
    setSavedData(data);
    alert("Saved!");
  }

  const toggleDarkMode = (checked: boolean) => {
    setIsDark(checked);
    document.documentElement.classList.toggle("dark", checked);
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-3xl font-bold text-center">Settings</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 bg-card p-6 rounded-xl shadow-md border"
        >
            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" {...register("name")} />
                {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" {...register("email")} />
                {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" {...register("password")} />
                {errors.password && (
                <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
            </div>

            <Button type="submit" className="w-full font-semibold text-white bg-black dark:bg-white dark:text-black hover:opacity-90">
                Save
            </Button>

            <div className="flex items-center gap-3 pt-4 border-t">
                <Switch
                  id="dark-mode"
                  checked={isDark}
                  onCheckedChange={toggleDarkMode}
                  className="data-[state=checked]:bg-zinc-800 data-[state=unchecked]:bg-zinc-300"
                />
                <Label htmlFor="dark-mode" className="text-sm font-medium">
                    Dark Mode
                </Label>
            </div>
        </form>
        {savedData && (
        <Card>
            <CardHeader>
            <CardTitle>Saved User Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
            <div><span className="font-medium text-foreground">Name:</span> {savedData.name}</div>
            <div><span className="font-medium text-foreground">Email:</span> {savedData.email}</div>
            </CardContent>
        </Card>
        )}
      </div>
    </div>
  )
}