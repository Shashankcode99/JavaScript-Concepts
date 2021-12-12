console.log(`Welcome to TUTORAIL NO.7 `)

//if and else if

const age=19;
if (age==19) {
    console.log(`Eligible for voting`);
} 

else {

     console.log(`Not e ligible for voting`);
}


/*if and else if along with '==' and '===' operator*/

        // '==' OPERATOR

const age1='60';// a string value



//'==' only checks for the value
if (age1==30) {
    console.log(`Age is `+age1);
} 

else if(age1==60) {

     console.log(`Age is `+age1);
}
else{
    console.log('Age is not mentioned');
}


              //'===' OPERATOR
const age2='25';
if(age2==19)
{
    console.log('It checks only value')
}

//'===' checks value and its type
else if(age2==='25')
{
    console.log('It checks value as well as type');
}
else{
    console.log('Age is not mentioned');
}









/*if and else if along with '!=' and '!==' operator*/

        // !=' OPERATOR

        const age3='30';// a string value



        //'!=' only checks for the value
        if (age3!=30) {
            console.log(`Age is `+age3);
        } 
        
        else if(age3!=60) {
        
             console.log(`Age is `+age3+ ' years') ;
        }
        else{
            console.log('Age is not mentioned');
        }
        
        
                      //'!==' OPERATOR
        const age4=60;
        if(age4!=25)
        {
            console.log('It checks only value')
        }
        
        //'!==' checks value and its type
        if(age4!=='60')
        {
            console.log('It checks value as well as type');
        }
        else{
            console.log('Age is not mentioned');
        }




        /*defining and undefining the type of variable.*/
        const vari=14;
        if(typeof vari!='undefined')
        {
            console.log('Defined variable')
        }
        else{
            console.log('Undefined variable')
        }




        /* Using Boolean value and Logical Operators*/

        const drive= true;
        age5=20;
        age6=16;
        if(drive && age5>18)
        {
            console.log("You can Drive");
        }
        if(drive || age6>18)
        {
            console.log("You can still Drive");
        }
        
        else
        {
            console.log("You cannot Drive");
        }


        /*Terary Operator*/
        age7=45;
        console.log(age7==45?'Age is 45': 'Age is not 45');




        /*SWITCH CASE Statements*/

        switch (age5) {
            case 20:
                console.log('You are 20');
                break;
        
            default:
                console.log('You are not 20');
                break;
        }
