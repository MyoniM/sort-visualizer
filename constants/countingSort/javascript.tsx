export const js = `
<script>
// Counting sort which takes negative numbers as well
 
    function countSort(arr)    {
    var max = Math.max.apply(Math, arr);
    var min = Math.min.apply(Math, arr);
 
    var range = max - min + 1;
    var count = Array.from({length: range}, (_, i) => 0);
    var output = Array.from({length: arr.length}, (_, i) => 0);
    for (i = 0; i < arr.length; i++) {
        count[arr[i] - min]++;
    }
 
    for (i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }
 
    for (i = arr.length - 1; i >= 0; i--) {
        output[count[arr[i] - min] - 1] = arr[i];
        count[arr[i] - min]--;
    }
 
    for (i = 0; i < arr.length; i++) {
        arr[i] = output[i];
    }
}
 
function printArray(arr){
    for (i = 0; i < arr.length; i++)    {
        document.write(arr[i] + " ");
    }
document.write('<br>');
}
 
// Driver code
var arr = [ -5, -10, 0, -3, 8, 5, -1, 10 ];
countSort(arr);
printArray(arr);
 
</script>
`;
