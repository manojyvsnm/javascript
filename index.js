var muthuBill = [200,300,400,500,600]
var mahaBill = [100,200,300,400,800]
var muthu = {
    fName : 'Muthu Swamy Iyer',
    mLocation: 'Tenali',
    muthuFun : function()
    {
        this.tips = []
        this.fBill = []
        for (i = 0; i < muthuBill.length; i++)
        {
        var muBill = muthuBill[i]
        
          if(muBill < 200)
          {
              percentage = 20/100;
          }
          else if (muBill >= 200 && muBill <= 300)
         {
             percentage = 30/100;
         }        
         else 
         {
          percentage = 40/100
         }
         this.tips[i] = muBill * percentage;
         this.fBill[i] = this.tips[i] + muBill
    }
}
}
muthu.muthuFun()
var mahathi = {
    fName : 'Basavaraju',
    mLocation: 'Tenali',
    muthuFun : function()
    {
        this.tips = []
        this.fBill = []
        for (i = 0; i < mahaBill.length; i++)
        {
        var muBill = mahaBill[i]
        
          if(muBill < 200)
          {
              percentage = 20/100;
          }
          else if (muBill >= 200 && muBill <= 300)
         {
             percentage = 30/100;
         }        
         else 
         {
          percentage = 40/100
         }
         this.tips[i] = muBill * percentage;
         this.fBill[i] = this.tips[i] + muBill
    }
}
}
mahathi.muthuFun()

function avgg(tips)
{
    var sum = 0;
    for( i = 0; i < tips.length; i++)
    {
        sum+=tips[i]
        
    }
    return sum/tips.length

}
 var mahaAvg = avgg(mahathi.tips)
 var muthuAvg = avgg(muthu.tips)
 
 console.log(mahaAvg)
 console.log(muthuAvg)
 var highestAvg = (mahaAvg < muthuAvg)? 'muthu is higher' : 'mahathi is higher'
 console.log(highestAvg)