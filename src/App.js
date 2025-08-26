import React, {useState, useEffect} from "react";

function App(){
  const bolos =[
    
    {id: 1, nome: "Bolo Simples", preco:"R$50,00" },

    { id:2, nome: "Bolo Vulcão", preco:"R$ 130,00"}, 

    {id: 2, nome: "Aro 15 cm", preco: "R$ 200,00", fatias: "12 fatias"},

    {id: 3, nome: "Aro 20 cm", preco: "R$ 250,00", fatias: "24 fatias" }, 

    {id: 4, nome: "Aro 25 cm", preco: "R$ 380,00", fatias: "15 fatias" }
 

  ]

   const massas = ["Coco (beijinho e prestígio)", "Morango (mousse e geleia)", "Brigadeiro", "Chocolate (mousse)", "Baunilha"];
  const recheios = ["Doce de leite", "Maracujá (mousse e geleia)"];
  const doces = ["Beijinho", "Amendoim", "Ninho", "Morango", "Brigadeiro"];

  const [pedido, setPedido] = useState({ nome: "", telefone: "", pedido: "" });
  const [carrosselIndex, setCarrosselIndex] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pedido enviado com sucesso!");
    setPedido({ nome: "", telefone: "", pedido: "" });
  };

  // Carrossel automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCarrosselIndex((prev) => (prev + 1) % bolos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bolos.length]);

  const estilo = {
    bgPage: { backgroundColor: "#fff0f5", minHeight: "100vh", fontFamily: "Arial, sans-serif" },
    header: { backgroundColor: "#ffb6c1", padding: "25px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" },
    navLink: { marginLeft: "20px", cursor: "pointer", fontWeight: "bold", color: "#6b3e26", textDecoration: "underline" },
    section: { maxWidth: "1000px", margin: "40px auto", padding: "20px", borderRadius: "20px" },
    card: { backgroundColor: "#fff", padding: "20px", borderRadius: "15px", boxShadow: "0 6px 12px rgba(0,0,0,0.15)", marginBottom: "20px", textAlign: "center", transition: "0.3s", cursor: "pointer" },
    button: { backgroundColor: "#ff69b4", color: "#fff", padding: "12px 25px", border: "none", borderRadius: "12px", cursor: "pointer", fontWeight: "bold", fontSize: "16px", transition: "0.3s" },
    whatsapp: { position: "fixed", bottom: "25px", right: "25px", backgroundColor: "#25d366", color: "#fff", padding: "18px", borderRadius: "50%", textAlign: "center", fontWeight: "bold", fontSize: "22px", cursor: "pointer", boxShadow: "0 4px 10px rgba(0,0,0,0.3)" },
    sectionPink: { backgroundColor: "#ffe6f0" },
    sectionBrown: { backgroundColor: "#f5e0d6" },
    formInput: { padding: "10px", borderRadius: "10px", border: "1px solid #ccc", fontSize: "16px" },
    formTextarea: { padding: "10px", borderRadius: "10px", border: "1px solid #ccc", fontSize: "16px", minHeight: "80px" },
    carrossel: { textAlign: "center", marginBottom: "30px" },
    carrosselImg: { width: "100%", maxWidth: "400px", borderRadius: "15px", boxShadow: "0 6px 12px rgba(0,0,0,0.2)" }
  };

  return (
    <div style={estilo.bgPage}>
      {/* Header */}
      <header style={estilo.header}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "bold" }}>Confeitaria Delícia</h1>
        <nav>
          <span style={estilo.navLink} onClick={() => document.getElementById("bolos").scrollIntoView()}>Bolos</span>
          <span style={estilo.navLink} onClick={() => document.getElementById("massas").scrollIntoView()}>Massas</span>
          <span style={estilo.navLink} onClick={() => document.getElementById("doces").scrollIntoView()}>Doces</span>
          <span style={estilo.navLink} onClick={() => document.getElementById("pedido").scrollIntoView()}>Pedido</span>
        </nav>
      </header>

      {}
      <section style={estilo.carrossel}>
        <img src={bolos[carrosselIndex].img} alt={bolos[carrosselIndex].nome} style={estilo.carrosselImg} />
        <h3>{bolos[carrosselIndex].nome} - {bolos[carrosselIndex].preco}</h3>
      </section>

      {}
      <section id="bolos" style={{...estilo.section, ...estilo.sectionPink}}>
        <h2 style={{textAlign: "center", fontSize: "1.8rem", fontWeight: "bold"}}> Nossos Bolos</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginTop: "25px" }}>
          {bolos.map(bolo => (
            <div key={bolo.id} style={estilo.card} onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"} onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
              <img src={bolo.img} alt={bolo.nome} style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}/>
              <h3 style={{ fontSize: "1.3rem", fontWeight: "bold" }}>{bolo.nome}</h3>
              <p>{bolo.fatias}</p>
              <p style={{ fontWeight: "bold", color: "#ff1493" }}>{bolo.preco}</p>
            </div>
          ))}
        </div>
      </section>

      {}
      <section id="massas" style={{...estilo.section, ...estilo.sectionBrown}}>
        <h2 style={{textAlign: "center", fontSize: "1.8rem", fontWeight: "bold"}}> Massas & Recheios</h2>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "20px" }}>
          <div>
            <h3 style={{ fontWeight: "bold" }}>Massas</h3>
            <ul>{massas.map((m,i) => <li key={i}>{m}</li>)}</ul>
          </div>
          <div>
            <h3 style={{ fontWeight: "bold" }}>Recheios</h3>
            <ul>{recheios.map((r,i) => <li key={i}>{r}</li>)}</ul>
          </div>
        </div>
      </section>

      {}
      <section id="doces" style={{...estilo.section, ...estilo.sectionPink}}>
        <h2 style={{textAlign: "center", fontSize: "1.8rem", fontWeight: "bold"}}>Cento de Doces</h2>
        <ol style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "15px", marginTop: "15px" }}>
          {doces.map((d,i) => <li key={i} style={{ backgroundColor: "#fff", padding: "10px 15px", borderRadius: "10px", boxShadow: "0 3px 6px rgba(0,0,0,0.2)" }}>{d}</li>)}
        </ol>
      </section>

      {}
      <section id="pedido" style={{...estilo.section, ...estilo.sectionBrown}}>
        <h2 style={{textAlign: "center", fontSize: "1.8rem", fontWeight: "bold"}}> Faça seu Pedido</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: "20px" }}>
          <input placeholder="Seu Nome" value={pedido.nome} onChange={(e) => setPedido({ ...pedido, nome: e.target.value })} required style={estilo.formInput}/>
          <input placeholder="Telefone" value={pedido.telefone} onChange={(e) => setPedido({ ...pedido, telefone: e.target.value })} required style={estilo.formInput}/>
          <textarea placeholder="Digite seu pedido aqui..." value={pedido.pedido} onChange={(e) => setPedido({ ...pedido, pedido: e.target.value })} required style={estilo.formTextarea}/>
          <button type="submit" style={estilo.button} onMouseEnter={e=>e.currentTarget.style.backgroundColor="#ff1493"} onMouseLeave={e=>e.currentTarget.style.backgroundColor="#ff69b4"}>Enviar Pedido</button>
        </form>
      </section>

      {/* WhatsApp */}
      <a href="https://wa.me/5513991430223" target="_blank" rel="noopener noreferrer" style={estilo.whatsapp}>💬</a>
    </div>
  );
}

export default App;
