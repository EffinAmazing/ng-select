import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleService {
    warn(message: string) {
        console.warn(message)
    }

    showMessage(env: string, message?: any, data?: any) {
        if (env && env !== 'production') {
            if (data)
                console.log(message,data); 
            else
                console.log(message); 

        }
    }
}
