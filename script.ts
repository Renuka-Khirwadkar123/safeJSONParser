type User={

    id: number,
    name: string,
    email: string,
    age: number
}

function isUser(value:unknown): value is User{

    if(typeof value!=="object" || value===null){

        return false
    }

    const obj=value as Record<string, unknown>

    return(

        typeof obj.id==="number" &&
        typeof obj.name==="string" &&
        typeof obj.email==="string" &&
        typeof obj.age==="number"
    )


}

const input=document.getElementById("jsonInput") as HTMLTextAreaElement
const button=document.getElementById("validateBtn") as HTMLButtonElement
const output= document.getElementById("output") as HTMLPreElement


button.addEventListener("click",()=>{
try{
    const data: unknown=JSON.parse(input.value)
    if(isUser(data)){

        output.textContent =
  "Valid User\n\n" + JSON.stringify(data, null, 2)
    }

    else{

        output.textContent = "Invalid User Shape"
    }
}
catch{

     output.textContent = "Invalid JSON"
}
})

function fillExample() {
  input.value = `{
  "id": 1,
  "name": "Renuka",
  "email": "abc@gmail.com",
  "age": 21
}`
}

