$(document).ready(function() {
    // Função para salvar código no localStorage
    $('.compile-btn').click(function() {
        var code = $(this).siblings('code').text();
        // Salvar o código HTML no localStorage
        localStorage.setItem('compilador_js', code);
        // Exibir mensagem de confirmação visual
        showCompileMessage('Código Enviado! Acede ao compilador para editar.');
    });

    // Função para exibir mensagem de confirmação
    function showCompileMessage(message) {
        const messageBox = document.createElement("div");
        messageBox.textContent = message;
        messageBox.style.position = "fixed";
        messageBox.style.bottom = "20px";
        messageBox.style.right = "80px";
        messageBox.style.backgroundColor = "#4CAF50";
        messageBox.style.color = "white";
        messageBox.style.padding = "10px 20px";
        messageBox.style.borderRadius = "5px";
        messageBox.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)";
        messageBox.style.zIndex = "9999";
        document.body.appendChild(messageBox);

        // Remover a mensagem após 2 segundos
        setTimeout(() => {
            document.body.removeChild(messageBox);
        }, 2000);
    }
});

window.addEventListener("message", (event) => {
    if (event.data === "dark-mode") {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        if (typeof editor !== "undefined") {
            editor.setOption("theme", "dracula");
        }
        console.log("Dark mode aplicado na página de tutorial");
    } else if (event.data === "light-mode") {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        if (typeof editor !== "undefined") {
            editor.setOption("theme", "default");
        }
        console.log("Light mode aplicado na página de tutorial");
    }
});