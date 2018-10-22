//counter

const $item = document.querySelectorAll('.item')
const $cross = document.querySelectorAll('.delete-item')
const $chosenum = document.querySelectorAll('.chose-number')
const $end = document.querySelectorAll('.end')

const $renum = document.querySelectorAll('.re-num')

const $chosecost = document.querySelectorAll('.chose-cost-number')
const $cost = document.querySelectorAll('.cost-number')

const $minusbutton = document.querySelectorAll('#minusbutton')
const $numb = document.querySelectorAll('#numb')
const $plusbutton = document.querySelectorAll('#plusbutton')

    // let newcost = []
    // for (let i = 0; i < $cost.length; i++)
    // {
    //     newcost.push($cost[i].textContent)
    //     console.log(newcost)
    // }

    // const newcost = $cost.slice()
    // console.log(newcost)

    // const newcost = [...$cost]
    // console.log(newcost)

    const newcost = []
    for (j = 0; j < $cost.length; j++) {
        newcost[j] = $cost[j].textContent
    }

for (let j = 0; j < $minusbutton.length; j++) {
    $minusbutton[j].addEventListener('click', function() {
        if ($numb[j].textContent > 1) {
            $numb[j].textContent--
            $cost[j].textContent = $numb[j].textContent * newcost[j]
            for (let k = 0; k < $chosenum.length; k++) {
                $chosenum[k].textContent--
                $chosecost[k].textContent = $chosecost[k].textContent - newcost[j]
            }
        }
    })
}
for (let j = 0; j < $minusbutton.length; j++) {
    $plusbutton[j].addEventListener('click', function() {
        if ($numb[j].textContent < $renum[j].textContent) {
            $numb[j].textContent++
            $cost[j].textContent = $numb[j].textContent * newcost[j]
            for (let k = 0; k < $chosenum.length; k++) {
                $chosenum[k].textContent++
                console.log(newcost[j])
                $chosecost[k].textContent = parseInt($chosecost[k].textContent) + parseInt(newcost[j])
            }
        }
    })
}

// remove

for (let i = 0; i < $item.length; i++) {
    $cross[i].addEventListener('click', function() {
        $item[i].remove()
        for (let k = 0; k < $chosenum.length; k++) {
            $chosenum[k].textContent = $chosenum[k].textContent - $numb[i].textContent


            if ($chosenum[1].textContent == 0) {
                $end[1].remove()
            }
        $chosecost[k].textContent = $chosecost[k].textContent - $cost[i].textContent
        }
    })
}

