const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')

const workCurrent = document.getElementById('workCurrent')
const workPrevious = document.getElementById('workPrevious')

const playCurrent = document.getElementById('playCurrent')
const playPrevious = document.getElementById('playPrevious')

const studyCurrent = document.getElementById('studyCurrent')
const studyPrevious = document.getElementById('studyPrevious')

const exerciseCurrent = document.getElementById('exerciseCurrent')
const exercisePrevious = document.getElementById('exercisePrevious')

const socialCurrent = document.getElementById('socialCurrent')
const socialPrevious = document.getElementById('socialPrevious')

const selfCareCurrent = document.getElementById('selfCareCurrent')
const selfCarePrevious = document.getElementById('selfCarePrevious')

const data = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
]

daily.addEventListener('click', () => {
  daily.classList.add('active')
  weekly.classList.remove('active')
  monthly.classList.remove('active')
  getData()
})

weekly.addEventListener('click', () => {
  daily.classList.remove('active')
  weekly.classList.add('active')
  monthly.classList.remove('active')
  getData()
})

monthly.addEventListener('click', () => {
  daily.classList.remove('active')
  weekly.classList.remove('active')
  monthly.classList.add('active')
  getData()
})

function getData() {
  if (daily.classList.contains('active')) {
    workCurrent.innerText = data[0].timeframes.daily.current
    workPrevious.innerText = data[0].timeframes.daily.previous

    playCurrent.innerText = data[1].timeframes.daily.current
    playPrevious.innerText = data[1].timeframes.daily.previous

    studyCurrent.innerText = data[2].timeframes.daily.current
    studyPrevious.innerText = data[2].timeframes.daily.previous

    exerciseCurrent.innerText = data[3].timeframes.daily.current
    exercisePrevious.innerText = data[3].timeframes.daily.previous

    socialCurrent.innerText = data[4].timeframes.daily.current
    socialPrevious.innerText = data[4].timeframes.daily.previous

    selfCareCurrent.innerText = data[5].timeframes.daily.current
    selfCarePrevious.innerText = data[5].timeframes.daily.previous
  }

  if (weekly.classList.contains('active')) {
    workCurrent.innerText = data[0].timeframes.weekly.current
    workPrevious.innerText = data[0].timeframes.weekly.previous

    playCurrent.innerText = data[1].timeframes.weekly.current
    playPrevious.innerText = data[1].timeframes.weekly.previous

    studyCurrent.innerText = data[2].timeframes.weekly.current
    studyPrevious.innerText = data[2].timeframes.weekly.previous

    exerciseCurrent.innerText = data[3].timeframes.weekly.current
    exercisePrevious.innerText = data[3].timeframes.weekly.previous

    socialCurrent.innerText = data[4].timeframes.weekly.current
    socialPrevious.innerText = data[4].timeframes.weekly.previous

    selfCareCurrent.innerText = data[5].timeframes.weekly.current
    selfCarePrevious.innerText = data[5].timeframes.weekly.previous
  }

  if (monthly.classList.contains('active')) {
    workCurrent.innerText = data[0].timeframes.monthly.current
    workPrevious.innerText = data[0].timeframes.monthly.previous

    playCurrent.innerText = data[1].timeframes.monthly.current
    playPrevious.innerText = data[1].timeframes.monthly.previous

    studyCurrent.innerText = data[2].timeframes.monthly.current
    studyPrevious.innerText = data[2].timeframes.monthly.previous

    exerciseCurrent.innerText = data[3].timeframes.monthly.current
    exercisePrevious.innerText = data[3].timeframes.monthly.previous

    socialCurrent.innerText = data[4].timeframes.monthly.current
    socialPrevious.innerText = data[4].timeframes.monthly.previous

    selfCareCurrent.innerText = data[5].timeframes.monthly.current
    selfCarePrevious.innerText = data[5].timeframes.monthly.previous
  }
}

getData()
