import * as React from 'react';
const FourIcons = ({ startColor, endColor, ...otherProps }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={28} fill="none" {...otherProps}>
    <path
      fill="url(#patha)"
      d="M1 17.796c.387-.078.563-.155.74-.148 2.108.085 3.307-1.002 3.596-3.26.421-3.26.475-3.325 3.468-4.168.23-.064.462-.142.692-.205 3.617-.929 4.493-4.189 1.765-6.988-.638-.652-1.914-1.255-2.633-1.021-.747.24-1.242 1.502-1.71 2.395-.272.518-.279 1.198-.448 2.049-1.317-1.75-1.297-3.303-.177-4.89C7.277.176 9.042-.355 10.697.24c2.857 1.028 4.839 4.713 4.174 7.803-.638 2.941-2.993 3.402-5.266 3.827-2.721.51-2.769.49-3.06 3.43C6.17 19.15 4.426 20.016 1 17.804v-.007Z"
    />
    <path
      fill="url(#pathb)"
      d="M12.61 20.438c.8-1.671 2.392-1.91 3.506-.527 1.217 1.513 1.185 4.42-.07 5.926-1.191 1.43-2.934 1.542-4.61.089-1.052-.914-1.901-2.077-2.968-3.268l-2.106 2.177c-2.317 2.387-4.086 2.214-5.95-.83.448.29.902.58 1.344.876 1.513 1.004 2.326.9 3.524-.475.54-.627 1.043-1.29 1.6-1.896 1.341-1.454 2.228-1.389 3.457.188.574.74 1.076 1.58 1.79 2.14.527.417 1.567.848 1.966.588.616-.395 1.158-1.335 1.249-2.108.237-2.035-.658-2.87-2.725-2.88h-.006Z"
    />
    <defs>
      <linearGradient
        id="patha"
        x1={-0.485}
        x2={26.86}
        y1={19.003}
        y2={13.016}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.229} stopColor={startColor} />
        <stop offset={0.904} stopColor={endColor} />
      </linearGradient>
      <linearGradient
        id="pathb"
        x1={-1.538}
        x2={25.152}
        y1={25.976}
        y2={14.146}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.229} stopColor={startColor} />
        <stop offset={0.904} stopColor={endColor} />
      </linearGradient>
    </defs>
  </svg>
);

export default FourIcons;
