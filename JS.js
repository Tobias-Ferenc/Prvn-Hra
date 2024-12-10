
function Michal(){
    document.addEventListener('keydown', (event) => {
        const key = event.key; 
        const code = event.code; 
    
        console.log(`Stisknutá klávesa: ${key} (code: ${code})`);
    });
}

