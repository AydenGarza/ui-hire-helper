import { useState, useEffect } from "react";

export default function LoginPage() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	
	return <div className = "flex flex-col">
		<input type="email" placeholder="type your email here" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 rounded"/>
		<input type="password" placeholder="type your password here" value = {password} onChange = {e => setEmail(e.target.value)} className = "border p2 rounded"/>
		<button>
			Sign in
		</button>
	</div>
}