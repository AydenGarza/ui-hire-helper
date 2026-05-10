import { useState, useEffect } from "react";

export default function LoginPage() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const whatever = () => {
		setEmail('');
		setPassword('');
	}
	return <div className = "dark:bg-gray-800 flex flex-col gap-3 max-w-1/2 mx-auto mt-20 rounded">
		<input type="email" placeholder="type your email here" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 rounded dark:text-white"/>
		<input type="password" placeholder="type your password here" value = {password} onChange = {e => setPassword(e.target.value)} className = "border p2 rounded dark:text-white"/>
		<button onClick = {whatever} className="dark:text-white">
			Sign in
		</button>
	</div>
}