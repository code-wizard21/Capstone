
    async function apiCall(url){
        try{
            let response = await fetch(url);
            let data = await response.json();
            return data;
        }
        catch(e){
            console.log(e);
        }
    }

    export default apiCall