let arr = [];
item=0;
$(document).ready(function () {
    $('#save').click(function () {
        event.preventDefault();
        let dish = $('#dish').val();
        let recipe = $('#recipe').val();
        let ingradient = $('#ingradient').val();
        let Quantity=$('#Quantity').val();
        let select=$('.select').val();
        let file = $('#file').val();
        if (dish != "" && recipe != "" && ingradient != "" && Quantity!="" && file != "") {



            obj = {
                dish: dish,
                recipe: recipe,
                ingradient: ingradient,
                Quantity: Quantity,
                select: select,
                file: file

            }

            arr.push(obj);
            add();
        }
        else
         {
            alert('**Please fill all the details');
        }
        // console.log(arr);
        // console.log(file);

        $('#dish').val("");
        $('#recipe').val("");
        $('#ingradient').val("");
        $('#Quantity').val("");
        $('.select').val("");
        $('#file').val("");




        add();
        
    })

})

function add() {
    $('tbody').empty();
    for (i = 0; i < arr.length; i++) {

        let tr = "";
        tr = `<tr><td>${arr[i].dish}</td><td>${arr[i].recipe}</td><td>${arr[i].ingradient}</td>
    <td>${arr[i].Quantity}</td><td>${arr[i].select}</td><td>${arr[i].file}</td>
    <td><button class="btn btn-danger" onclick="Delete(${i})">Delete</button>&nbsp;
    </td><td><button class="btn btn-success" onclick="Edit(${i})" id="edit">Edit</button></td><td> 
    <button class="btn btn-success" onclick="add1()" id="add">Add_Ingradient</button>
    </td></tr>`

        $('#table tbody').append(tr);
    }

}

let data = JSON.stringify(arr);
localStorage.setItem('arr', data);
localStorage.getItem(JSON.parse(data))



function Delete(i) {

    arr.splice(i, 1);
    add();


}

function Edit(item) {


    $('#dish').val(arr[item].dish);
    $('#recipe').val(arr[item].recipe);
    $('#ingradient').val(arr[item].ingradient);
    $('#Quantity').val(arr[item].Quantity);
    $('.select').val(arr[item].Quantity);
    $('#file').val(arr[item].file);


    $('#edit').on('click',function(e){
        $('.update1').show(e);
        $("#myModal").modal({show:true});

        
    });

}
function update() {

    var data = {};
    item=0;
    data['dish'] = $('#dish').val();
    data['recipe'] = $('#recipe').val();
    data['ingradient']=$('#ingradient').val();
    data['Quantity'] = $('#Quantity').val();
    data['select']=$('.select').val();
    data['file'] = $('#file').val();
    arr.splice(item, 1, data);
    add();
    console.log(arr);
 
    $('#dish').val("");
    $('#recipe').val("");
    $('#ingradient').val("");
    $('#Quantity').val("");
    $('.select').val("");
    $('#file').val("");



}
$('#search').on ('keyup', function(){
    let value=$(this).val().toLowerCase();
    $('#table tr').filter( function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1)
    })

})
// function add1(){
    
//     let max_length=1;
//     debugger;
//     let x=1;
//     let tend='<input type="text" placeholder="Add Ingradient" class="form-control input" id="ingradient1">'
//     debugger;
//     if(x >=max_length){
//         x++;
//         $('#input').append(tend);
//         $("#myModal").modal({show:true});
       

//     }
    // $('#dish').hide();
    // $('#recipe').hide();
    // $('#Quantity').hide();
    // $('.select').hide();
    // $('#file').hide();
    // let ingradient1=$('#ingradient1').val();

    // arr.push({
    //     ingradient1:ingradient1
    // })
    // console.log(arr);

    // for(i=0;i<ingradient1.length;i++)
    // {
    //     var p="";
    //     p=`<tr><td>${arr[i].ingradient1}</td></tr>`
    //     ('tbody ').append(p);
        
        
    // }

   
    
}



  









