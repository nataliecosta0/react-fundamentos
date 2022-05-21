const TemplateExpressions = () => {
    const nome = "Natalie";
    const data = {
        age: "26",
        job: "Developer"
    }
    return (
        <div>
            <h1>Olá {nome}, tudo bem?</h1>
            <p>Você atua como {data.job}</p>
            <p>{console.log("JSX React")}</p>
            <p>{4+4}</p>
        </div>
    )
}

export default TemplateExpressions;