
import { Link } from "react-router-dom";

const LoginPage = () => {

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">

            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">

                <h1 className="mb-2 text-2xl font-bold">
                    로그인
                </h1>

                <p className="mb-8 text-sm text-gray-500">
                    Dev Board에 로그인하세요.
                </p>

                <form className="space-y-5">

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            이메일
                        </label>

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="example@email.com"
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block text-sm font-medium">
                            비밀번호
                        </label>

                        <input type="password"
                            name="password"
                            required
                            placeholder="비밀번호"
                            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700"
                    >
                        로그인
                    </button>

                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    계정이 없으신가요?
                    <Link
                        to="/users/signup"
                        className="font-medium text-indigo-600 hover:underline"
                    >
                        회원가입
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default LoginPage;