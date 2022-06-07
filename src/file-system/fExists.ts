import fs from "fs";




export const fExists = async (filePath: string) =>
    new Promise( resolve =>
        fs.exists(filePath,(e) =>
            resolve(e)
        )
    )