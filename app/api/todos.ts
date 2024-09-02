export async function GET() {
    const todos = [
        {id:1, text:"Learn Next.js",completed:false},
        {id:2, text:"use tailwind", completed:false},
        {id:3, text:"use recoil",completed:false}
    ];

    return new Response(JSON.stringify(todos),{
        status:200,
        headers:{
            'Content-Type':"apllication/json"
        }
    })
}