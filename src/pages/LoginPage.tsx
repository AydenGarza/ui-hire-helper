import { useState, useEffect } from "react";

export default function LoginPage() {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>('');
	async function login() {
		setErrorMessage('');

		if (!email || !password) {
			setErrorMessage('Both email and password must be present');
			return;
		}

		if (!email.includes("@")) {
			setErrorMessage("@ must be present in email");
			return;
		}

		if (!email.includes(".")) {
			setErrorMessage(". must be present in email");
			return;
		}
		try {
			const request = {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(
					{
						"email": email,
						"password": password
					}
				)
			}
			const response = await fetch("http://localhost:8000/accounts/login", request)
			if (!response.ok) {
				const errorData = await response.json();
				let errorDataMessage = "error :("
				if (typeof errorData.detail === "string") {
					errorDataMessage = errorData.detail;
				}
				else {
					errorDataMessage = errorData.detail[0].msg;
				}
				setErrorMessage(errorDataMessage);
				setEmail('');
				setPassword('');
				return;
			}
			const responseJson = await response.json();
	
			localStorage.setItem("access_token", responseJson.access_token)
			localStorage.setItem("refresh_token", responseJson.refresh_token)
	
			
			setEmail('');
			setPassword('');
		}
		catch {
			setErrorMessage("something really wrong happened, try again i guess");
		}
	}
	return <div className="bg-background flex flex-col gap-3 max-w-1/2 mx-auto mt-20 rounded">
		<div className="flex justify-center">
			<h1 className="text-3xl text-textcolor">Hire Helper</h1>
		</div>
		<input type="email" placeholder="type your email here" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 rounded text-textcolor"/>
		<input type="password" placeholder="type your password here" value = {password} onChange = {e => setPassword(e.target.value)} className = "border p-2 rounded text-textcolor"/>
		<button onClick = {login} className="text-textcolor">
			Sign in
		</button>
		{errorMessage && <p className="text-red-600 bg-red-300 p-2 rounded-2xl">{errorMessage}</p>}
	</div>
}