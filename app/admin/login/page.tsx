"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

interface LoginResponse {
  token: string;
  username: string;
  expiresAt: string;
}

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Basic validation
    if (!username.trim() || !password.trim()) {
      setError("İstifadəçi adı və şifrə tələb olunur");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ 
          username: username.trim(), 
          password: password 
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login uğursuz oldu");
        setIsLoading(false);
        return;
      }

      const loginData = data as LoginResponse;

      // Store token and user info
      localStorage.setItem("token", loginData.token);
      localStorage.setItem("username", loginData.username);
      localStorage.setItem("tokenExpiry", loginData.expiresAt);

      // Redirect to dashboard
      router.push("/admin/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setError("Serverlə əlaqə qurularkən xəta baş verdi. Backend işə salındığından əmin olun.");
      setIsLoading(false);
    }
  };

  return (
    <section className="login-wrapper">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        
        <div className="input-group">
          <input
            type="text"
            placeholder="İstifadəçi adı"
            value={username}
            onChange={e => setUsername(e.target.value)}
            disabled={isLoading}
            autoComplete="username"
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Şifrə"
            value={password}
            onChange={e => setPassword(e.target.value)}
            disabled={isLoading}
            autoComplete="current-password"
          />
        </div>

        {error && <p className="login-error">{error}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Yüklənir..." : "Daxil ol"}
        </button>
      </form>
    </section>
  );
}