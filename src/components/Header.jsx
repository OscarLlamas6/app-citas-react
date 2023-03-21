function Header(){
    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">Seguimiento Pacientes {" "}
            <span className="text-indigo-600">Veterinaria</span>
            </h1>
            <h2 className="font-black text-3xl text-center md:w-2/3 mx-auto">App corriendo en: {" "}
            <span className="text-indigo-600">{window._env_.CLOUD_COMPUTING_PROVIDER}</span>
            </h2>
        </>
    )
}

export default Header;