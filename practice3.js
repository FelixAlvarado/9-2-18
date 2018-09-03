var leastBricks = function(wall) {
    let counter = {};
    wall.forEach((row, i)=>{
        let count = 0;
        row.forEach((brick, i) =>{
            count += brick;
            if(i < row.length - 1){
                if(counter[count]){
                    counter[`${count}`] += 1;
                }else{
                    counter[`${count}`] = 1;
                }
            }
        });
    });
    
    let values = Object.values(counter);
    if (values.length === 0) {return wall.length;}
    return wall.length - Math.max(...values);
};