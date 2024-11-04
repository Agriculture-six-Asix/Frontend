import { Link } from "react-router-dom"

function LoginForm(){
    return(
        <>
            <htmlForm className="min-w-full">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-800 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-12 group">
                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-800 dark:focus:border-primaryColor focus:outline-none focus:ring-0 focus:border-primaryColor peer" placeholder=" " required />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-800 dark:text-gray-800 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primaryColor peer-focus:dark:text-primaryColor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div>
                    <div className="flex items-start justify-between mb-5">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-green-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-regular text-black dark:text-gray-300">Ingatkan Saya</label>
                        </div>
                        <div>
                            <Link to="/forgot-password" className="text-blue-700">Lupa Password?</Link>
                        </div>
                    </div>
                </div>
                <button type="submit" className="text-white bg-primaryColor hover:bg-primaryColor focus:ring-4 focus:outline-none font-medium rounded-sm text-sm w-full px-5 py-2.5 text-center mb-6">Masuk</button>
                <button type="submit" className="text-black bg-white focus:ring-4 focus:outline-none font-medium rounded-sm text-sm w-full px-5 py-2.5 text-center border-2 border-black flex items-center justify-center mb-6">
                    <img src="/assets/google.png" width={16} alt="" />
                    <span className="ml-3">
                        Login dengan google
                    </span>
                </button>
                <div className="flex justify-center">
                    Belum punya akun? <Link to="/register" className="ml-2 text-blue-700">Daftar Sekarang.</Link>
                </div>
            </htmlForm>
        </>
    )
}

export default LoginForm