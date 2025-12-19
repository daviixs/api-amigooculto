# Configuração Firebase para Frontend

Este arquivo contém exemplos de como configurar e usar Firebase Authentication no frontend.

## 📦 Instalação

```bash
npm install firebase
```

## 🔥 Configuração (React/Vue/Angular)

### `firebase.config.js`

```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Substitua pelos valores do seu projeto Firebase
// Console Firebase > Configurações do Projeto > Suas Apps
const firebaseConfig = {
  apiKey: 'AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'api-amigooculto.firebaseapp.com',
  projectId: 'api-amigooculto',
  storageBucket: 'api-amigooculto.firebasestorage.app',
  messagingSenderId: '520670283836',
  appId: '1:520670283836:web:xxxxxxxxxxxxxxxxxxxxx',
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar instância de autenticação
export const auth = getAuth(app);
```

---

## 🔐 Autenticação (Exemplos)

### **1. Login com Email e Senha**

```javascript
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.config';

async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // Obter ID Token para enviar ao backend
    const idToken = await user.getIdToken();

    console.log('Token:', idToken);

    // Agora usar este token nas requisições para o backend
    return idToken;
  } catch (error) {
    console.error('Erro no login:', error.message);
    throw error;
  }
}
```

### **2. Criar Conta (Registro)**

```javascript
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase.config';

async function register(name, email, password, phoneNumber) {
  try {
    // Criar usuário no Firebase
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    // Atualizar perfil com nome
    await updateProfile(user, {
      displayName: name,
    });

    // IMPORTANTE: Se usar telefone como "senha", configure no Firebase console
    // ou use updatePhoneNumber após verificação

    // Obter token para enviar ao backend
    const idToken = await user.getIdToken();

    return idToken;
  } catch (error) {
    console.error('Erro no registro:', error.message);
    throw error;
  }
}
```

### **3. Logout**

```javascript
import { signOut } from 'firebase/auth';
import { auth } from './firebase.config';

async function logout() {
  try {
    await signOut(auth);
    console.log('Logout realizado com sucesso');
  } catch (error) {
    console.error('Erro no logout:', error.message);
  }
}
```

### **4. Verificar Usuário Autenticado**

```javascript
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';

// Listener para mudanças no estado de autenticação
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // Usuário logado
    console.log('Usuário logado:', user.email);

    // Obter token atualizado
    const idToken = await user.getIdToken();

    // Salvar token (localStorage, context, state management)
    localStorage.setItem('firebaseToken', idToken);
  } else {
    // Usuário deslogado
    console.log('Usuário não está logado');
    localStorage.removeItem('firebaseToken');
  }
});
```

---

## 🌐 Requisições ao Backend

### **Service/API Client (Axios)**

```javascript
import axios from 'axios';
import { auth } from './firebase.config';

// Criar instância do Axios
const api = axios.create({
  baseURL: 'http://localhost:3000',
});

// Interceptor para adicionar token automaticamente
api.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;

    if (user) {
      // Obter token atualizado
      const idToken = await user.getIdToken();

      // Adicionar ao header
      config.headers.Authorization = `Bearer ${idToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Interceptor para tratar erros 401 (token expirado)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expirado, renovar
      const user = auth.currentUser;

      if (user) {
        const idToken = await user.getIdToken(true); // Force refresh

        // Retentar requisição com novo token
        error.config.headers.Authorization = `Bearer ${idToken}`;
        return api.request(error.config);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
```

### **Exemplo de Uso**

```javascript
import api from './api';

// GET /users/me (automaticamente adiciona token)
async function getMyProfile() {
  try {
    const response = await api.get('/users/me');
    console.log('Meu perfil:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
  }
}

// POST /groups (protegido)
async function createGroup(groupData) {
  try {
    const response = await api.post('/groups', groupData);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar grupo:', error);
  }
}
```

---

## 🎯 Exemplo Completo (React)

### `AuthContext.jsx`

```javascript
import { createContext, useContext, useEffect, useState } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from './firebase.config';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const idToken = await firebaseUser.getIdToken();
        setUser(firebaseUser);
        setToken(idToken);
      } else {
        setUser(null);
        setToken(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const idToken = await userCredential.user.getIdToken();
    setToken(idToken);
    return idToken;
  };

  const register = async (email, password, name) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await updateProfile(userCredential.user, { displayName: name });
    const idToken = await userCredential.user.getIdToken();
    setToken(idToken);
    return idToken;
  };

  const logout = async () => {
    await signOut(auth);
    setToken(null);
  };

  const value = {
    user,
    token,
    login,
    register,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
```

### `LoginPage.jsx`

```javascript
import { useState } from 'react';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      alert('Erro no login: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
        required
      />
      <button type="submit">Entrar</button>
    </form>
  );
}
```

### `ProfilePage.jsx`

```javascript
import { useEffect, useState } from 'react';
import api from './api';

function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await api.get('/users/me');
        setProfile(response.data);
      } catch (error) {
        console.error('Erro ao carregar perfil:', error);
      }
    }

    loadProfile();
  }, []);

  if (!profile) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Meu Perfil</h1>
      <p>Nome: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Telefone: {profile.phone}</p>
    </div>
  );
}
```

---

## 🔄 Renovação Automática de Token

Os tokens do Firebase expiram em **1 hora**. Use este hook para renovar automaticamente:

```javascript
import { useEffect } from 'react';
import { auth } from './firebase.config';

function useTokenRefresh() {
  useEffect(() => {
    const interval = setInterval(
      async () => {
        const user = auth.currentUser;

        if (user) {
          // Renovar token a cada 50 minutos
          const newToken = await user.getIdToken(true);
          console.log('Token renovado automaticamente');
        }
      },
      50 * 60 * 1000,
    ); // 50 minutos

    return () => clearInterval(interval);
  }, []);
}
```

---

## 📱 Autenticação com Telefone (Opcional)

Se quiser usar telefone como método de autenticação:

```javascript
import { signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { auth } from './firebase.config';

// Configurar reCAPTCHA
window.recaptchaVerifier = new RecaptchaVerifier(
  'recaptcha-container',
  {
    size: 'invisible',
    callback: (response) => {
      // reCAPTCHA resolvido
    },
  },
  auth,
);

// Enviar código SMS
async function sendSMSCode(phoneNumber) {
  const appVerifier = window.recaptchaVerifier;
  const confirmationResult = await signInWithPhoneNumber(
    auth,
    phoneNumber,
    appVerifier,
  );

  // Salvar confirmationResult para usar depois
  window.confirmationResult = confirmationResult;
}

// Verificar código SMS
async function verifyCode(code) {
  const result = await window.confirmationResult.confirm(code);
  const user = result.user;
  const idToken = await user.getIdToken();
  return idToken;
}
```

---

## ✅ Checklist de Implementação

- [ ] Instalar `firebase` no frontend
- [ ] Criar `firebase.config.js` com suas credenciais
- [ ] Implementar login/registro
- [ ] Criar interceptor Axios para adicionar token
- [ ] Implementar renovação automática de token
- [ ] Criar context/provider para gerenciar estado de autenticação
- [ ] Proteger rotas privadas no frontend
- [ ] Testar fluxo completo: login → requisição → logout

---

## 🚨 Erros Comuns

### **"Firebase: Error (auth/invalid-api-key)"**

- Verifique se a API Key está correta no `firebaseConfig`

### **"Firebase: Error (auth/network-request-failed)"**

- Verifique sua conexão com a internet
- Certifique-se de que o domínio está autorizado no Firebase Console

### **"401 Unauthorized" no backend**

- Token pode ter expirado (renove com `getIdToken(true)`)
- Verifique se o header `Authorization` está sendo enviado
- Confirme que o Firebase Admin SDK está configurado no backend

---

## 📚 Documentação Oficial

- [Firebase Authentication Web](https://firebase.google.com/docs/auth/web/start)
- [Firebase Auth Methods](https://firebase.google.com/docs/auth/web/manage-users)
- [Firebase ID Tokens](https://firebase.google.com/docs/auth/admin/verify-id-tokens)
