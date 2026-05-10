import { useState, useEffect } from "react";

export default function LoginPage() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const whatever = () => {
		setEmail('');
		setPassword('');
	}
	return <div className="bg-background flex flex-col gap-3 max-w-1/2 mx-auto mt-20 rounded">
		<div className="flex justify-center">
			<h1 className="text-3xl text-textcolor">Hire Helper</h1>
		</div>
		<input type="email" placeholder="type your email here" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 rounded text-textcolor"/>
		<input type="password" placeholder="type your password here" value = {password} onChange = {e => setPassword(e.target.value)} className = "border p-2 rounded text-textcolor"/>
		<button onClick = {whatever} className="text-textcolor">
			Sign in
		</button>
	</div>
}