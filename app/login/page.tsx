export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-md w-[350px]">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded mb-6"
        />

        <button className="w-full bg-[#e48a6a] text-white py-2 rounded-full">
          Login
        </button>
      </div>
    </div>
  );
}