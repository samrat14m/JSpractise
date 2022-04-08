 // Q1 : Write one example explaining how you can write a callback function ?

function A(callback) {
    callback()
    console.log('Bye...')
}

function B() {
    console.log('Hii...')
}

A(B)

// Output : Hii...             Bye...




// Q2 : Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 
//      3 should be printed after 3 sec and so on.
        // Explain callback hell.
        // Numbers
        // 1
        // 2
        // 3
        // 4
        // 5
        // 6
        // 7

let CallbackHell = () => {
    setTimeout(() => {
        console.log(1);
        setTimeout(() => {
            console.log(2);
            setTimeout(() => {
                console.log(3);
                setTimeout(() => {
                    console.log(4);
                    setTimeout(() => {
                        console.log(5);
                        setTimeout(() => {
                            console.log(6);
                            setTimeout(() => {
                                console.log(7);
                            }, 7000)
                        }, 6000)
                    }, 5000)
                }, 4000)
            }, 3000)
        }, 2000)
    }, 1000)
}                                                     // The triangle formed (Pyramaid of doom) is known as call back hell : it logged 1 after 1s, 2 after 2s... and so on.

CallbackHell()




// Q3 : Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 
//      3 should be printed after 3 sec and so on.
        // Numbers
        // 1
        // 2
        // 3
        // 4
        // 5
        // 6
        // 7

function PrintNum(time, num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(num)
            resolve('Promise Done')
        }, time)
    })
}        

PrintNum(1000, 1)
    .then(() => PrintNum(2000, 2))
    .then(() => PrintNum(3000, 3))
    .then(() => PrintNum(4000, 4))
    .then(() => PrintNum(5000, 5))
    .then(() => PrintNum(6000, 6))
    .then(() => PrintNum(7000, 7))




// Q4 : Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, 
//      and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected.

function PrintEvenNum(num) {
    return new Promise ((resolve, reject) => {
        if(num % 2 == 0) {
            console.log('Promise Resolved')
        }
        else{
            console.log('Promise Rejected')
        }
    })
}
PrintEvenNum(7)
    .then((resonse) => {console.log(response)})
    .catch((error) => {console.log(error)})                              // Promise Rejected
    
PrintEvenNum(88)
    .then((resonse) => {console.log(response)})
    .catch((error) => {console.log(error)})                              // Promise Resolved




// Q5 : Create examples to explain callback function.

function dohomework(cb) {
    cb()
    console.log('Do Homework')
}

function copyhomework() {
    console.log('Copy Homework')
}

dohomework(copyhomework)

// Outpout : Copy Homework           Do Homework




// Q6 : Create examples to explain callback hell function.

function Hell() {
    setTimeout(() => {
        console.log('1st')
        setTimeout(() => {
            console.log('2nd')
            setTimeout(() => {
                console.log('3rd')
                setTimeout(() => {
                    console.log('4th')
                    setTimeout(() => {
                        console.log('5th')
                    }, 5000)
                }, 4000)
            }, 3000)
        }, 2000)
    }, 1000)
}

Hell()

// Output : It logged     1st after 1s,     2nd after 2s,     3rd after 3s,     4th after 4s,     5th after 5s.




// Q7 : Create examples to explain promises function.

const promise = new Promise((res, rej) => {
    const x = 'ipl'
    const y = 'csk'

    if(x == y) {
        res()
    }
    else{
        rej()
    }
})

promise.then(() => { console.log('DONE') })
       .catch(() => { console.log('ERROR') })

// Output : ERROR




// Q8 : Create examples to explain async await function.

function PrintAlpha(letters) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(letters)
            resolve()
        }, 1000)
    })
}

async function Print() {

    await PrintAlpha('A')
    await PrintAlpha('B')
    await PrintAlpha('C')
    await PrintAlpha('D')
    await PrintAlpha('E')

}

Print()

// Output : It logged    A after 1s,     B after 1s,     C after 1s,     D after 1s,      E after 1s.




// Q9 : Create examples to explain promise.all function.

let pr1 = Promise.resolve(7);
let pr2 = 1511;
let pr3 = new Promise((res, rej) => {
    setTimeout(() => {
        res('Done')
    }, 2000)
})

Promise.all( [pr1, pr2, pr3]).then((value) => { console.log(value) } )

// Output : [7, 1511, 'Done']