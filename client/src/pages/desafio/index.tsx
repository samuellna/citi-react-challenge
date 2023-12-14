import React from "react";
import { LogoCITi2, Mangue } from "assets";
import { TextField, Typography, Button } from "@mui/material";

export default function Desafio() {
    return (
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", height:"100vh", width: "100%"}}>
            <div style={{backgroundColor: "#F8FAFC", width: "1440px", height: "900px"}}>

                <div style={{width: "max-content", height: "max-content", marginTop: "48px", marginLeft: "112px"}}>
                    <img src={LogoCITi2.src}></img>
                </div>

                <div style={{width: "384px", height: "427px", /*backgroundColor: "pink",*/ marginTop: "121px", marginLeft: "112px", display:"flex", flexDirection:"column", alignItems: "flex-start", gap: "40px"}}>
                    <div style={{width: "100%", height: "119px", /*backgroundColor: "blue",*/ display: "flex", flexDirection: "column", justifyContent:"space-between"}}>
                        <Typography variant="h4" color={"#1E293B"} fontWeight={"700"}>Acesse a plataforma</Typography>
                        <div style={{width: "100%", height: "48px", /*backgroundColor: "yellow"*/}}>
                            <Typography variant="subtitle1" color={"#475569"}>Faça login ou registre-se para começar a construir seus projetos ainda hoje.</Typography>
                        </div>
                    </div>

                    <div>
                        <Typography variant="subtitle1" color={"#1E293B"} fontWeight={"600"}>E-mail</Typography>
                        <TextField type="email" variant="outlined" placeholder="Digite seu e-mail" style={{width:"384px", backgroundColor:"white"}}></TextField>
                        <div style={{display: "flex", flexDirection: "row", justifyContent:"space-between", width: "384px", height: "max-content", marginTop:"16px"}}>
                            <Typography variant="subtitle1" color={"#1E293B"} fontWeight={"600"}>Senha</Typography>
                            <a style={{color:"#51E678", fontSize:"14px", fontWeight:"600"}}>Esqueceu a senha?</a>
                        </div>
                        <TextField type="password" variant="outlined" placeholder="Digite sua senha" style={{width:"384px", backgroundColor:"white"}}></TextField>
                    </div>
                    <Button variant="contained" style={{backgroundColor:"#51E678", width: "100%", height: "56px"}}>Entrar</Button>
                </div>
            </div>
            <div>
                <img src={Mangue.src} alt="Mangue" />
            </div>
        </div>
    );
}
