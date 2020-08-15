const Score = props => {
  const circumference = props.radius * 2 * Math.PI;
  let progress = props.score / 100;
  const [gaugeDashArray, setGaugeDashArray] = React.useState(`0 ${circumference}`)

  React.useEffect(() => {
    setGaugeDashArray(`${circumference*progress} ${circumference}`);
  });

  return (
    <div class="c-score">
      <div class="c-score__circle">
        <div class="c-score__score">{props.score}%</div>
      </div>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#03BF61" />
            <stop offset="100%" stop-color="#A7FF0E" />
          </linearGradient>

        </defs>
        <g transform="rotate(-90 50 50)">
          <circle cx="50" cy="50" r={props.radius}
            strokeWidth="6"
            fill="none"
          />
          <circle cx="50" cy="50" r={props.radius}
            strokeWidth="8"
            fill="none"
            stroke="#252525"
          />

          <circle cx="50" cy="50" r={props.radius}
            stroke="url(#gradient)"
            fill="none"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={gaugeDashArray}
            />

        </g>
      </svg>
    </div>
  )
}

document.querySelectorAll('.c-score').forEach(_ => {
  ReactDOM.render(
    <Score
      radius="40"
      score={_.getAttribute('data-score')}
    />
    ,
    _
  );

})
