/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core'

const draw = keyframes`
from{
    fill-opacity:0;

  }
  30% {
    stroke-dashoffset: 0;
    stroke-width: 0.5;
    fill-opacity: 0;
  }
  50% {
    stroke-width: 0;
    fill-opacity: 1;
  }
  70% {
    stroke-width: 0;
    fill-opacity: 1;
  }
`
const pencil = css`
  fill-opacity: 0;
  stroke: #86c232;
  fill: #86c232;
  stroke-width: 1px;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1100;
  stroke-linejoin: miter;
  stroke-linecap: round;
  animation: ${draw} 25s linear alternate infinite;
  animation-delay: 1s;
`

const create = css`
  fill-opacity: 0;
  stroke: #fff;
  fill: #fff;
  stroke-width: 0.5px;
  stroke-dasharray: 100;
  stroke-dashoffset: 110;
  stroke-linejoin: miter;
  stroke-linecap: round;
  animation: ${draw} 25s linear alternate infinite;
  animation-delay: 3s;
`

const Create = () => (
  <svg
    version='1.2'
    viewBox='0 0 150 184'
    xmlns='http://www.w3.org/2000/svg'
    className='col-xs-12'
  >
    <desc>Create animation</desc>
    <g id='pencil' transform='matrix(0 .55163 -.55163 0 644.4 24.272)'>
      <title>Pencil</title>
      <path
        className={pencil}
        d='m37.633 1080.4c1.171-1.17 3.071-1.17 4.242 0 6.521 6.52 26.224 26.22 32.744 32.75 0.563 0.56 0.879 1.32 0.879 2.12 0 0.79-0.316 1.56-0.879 2.12-4.568 4.57-14.928 14.93-14.928 14.93-0.246 0.24-0.502 0.47-0.772 0.69-0.557 0.44-1.167 0.82-1.812 1.13-1.261 0.59-2.654 0.9-4.048 0.88-1.242-0.02-2.478-0.29-3.615-0.79-0.617-0.27-1.204-0.61-1.747-1.02-0.243-0.18-0.476-0.37-0.702-0.57-0.084-0.08-0.167-0.16-0.249-0.24-8.093-7.99-16.136-16.03-24.13-24.13l-0.079-0.08c-0.208-0.22-0.407-0.45-0.594-0.69-0.415-0.53-0.771-1.11-1.06-1.72-0.482-1.02-0.774-2.13-0.858-3.25-0.117-1.58 0.18-3.18 0.858-4.62 0.305-0.64 0.685-1.25 1.13-1.81 0.216-0.27 0.448-0.52 0.691-0.77 0 0 10.36-10.36 14.929-14.93m50.406 19.32c0.563 0.57 0.879 1.33 0.879 2.13 0 0.79-0.316 1.55-0.879 2.12-1.292 1.29-2.936 2.93-4.227 4.22-0.563 0.57-1.326 0.88-2.122 0.88-0.795 0-1.558-0.31-2.121-0.88-6.521-6.52-26.223-26.22-32.744-32.74-0.563-0.56-0.879-1.32-0.879-2.12s0.316-1.56 0.879-2.12c1.292-1.29 2.936-2.94 4.227-4.23 0.563-0.56 1.326-0.88 2.122-0.88 0.795 0 1.558 0.32 2.121 0.88 6.521 6.52 26.223 26.22 32.744 32.74m-27.794-37.69c-0.563-0.56-0.879-1.32-0.879-2.12s0.316-1.56 0.879-2.12c15.016-15.02 104.67-104.67 104.67-104.67l0.97 5.761c0.075 0.431 0.166 0.857 0.281 1.279 0.239 0.879 0.568 1.733 0.981 2.544 0.295 0.58 0.633 1.138 1.01 1.668l0.097 0.133 0.025 0.034 0.073 0.099 0.032 0.042 0.07 0.092 0.032 0.043 0.075 0.095 0.028 0.036 0.104 0.128 0.106 0.129 0.029 0.035 0.078 0.091 0.038 0.044 0.071 0.082 0.04 0.045 0.073 0.081 0.038 0.043 0.085 0.092 0.027 0.029 0.113 0.12 0.026 0.027 0.089 0.091 0.04 0.042 0.076 0.076 0.045 0.044 0.075 0.073 0.044 0.043 0.082 0.078 0.038 0.036 0.121 0.112c1.174 1.074 2.54 1.935 4.015 2.529 0.796 0.32 1.623 0.563 2.466 0.725 0.381 0.072 0.765 0.126 1.151 0.168 0.146 0.014 0.292 0.026 0.438 0.037 0.341 0.022 0.682 0.028 1.021 0.068 0.556 0.068 1.103 0.204 1.625 0.407 0.776 0.301 1.494 0.747 2.109 1.309 0.729 0.665 1.311 1.49 1.69 2.402 0.267 0.643 0.427 1.323 0.49 2.017 9e-3 0.113 0.016 0.227 0.02 0.34 0.016 0.389 0.045 0.777 0.093 1.163 0.112 0.905 0.318 1.798 0.613 2.661 0.515 1.509 1.305 2.922 2.318 4.153l0.089 0.107 0.029 0.035 0.061 0.071 0.036 0.041 0.056 0.065 0.038 0.043 0.054 0.061 0.04 0.045 0.052 0.056 0.044 0.048 0.039 0.043 0.051 0.054 0.088 0.092c0.866 0.902 1.858 1.682 2.941 2.308 0.825 0.478 1.702 0.866 2.61 1.156 0.417 0.133 0.84 0.242 1.267 0.336 0.144 0.03 0.288 0.059 0.433 0.086 1.964 0.342 3.932 0.662 5.897 0.993 0 0-89.655 89.656-104.67 104.68-0.562 0.56-1.325 0.87-2.121 0.87s-1.559-0.31-2.121-0.87c-6.521-6.53-26.223-26.23-32.744-32.75m110.92-113.9 20.933-7.684c0.139 1.528 0.279 3.055 0.429 4.582 0.071 0.652 0.167 1.299 0.3 1.942 0.273 1.328 0.685 2.627 1.228 3.87 0.921 2.112 2.219 4.057 3.814 5.721 1.837 1.916 4.061 3.452 6.505 4.487 1.184 0.501 2.417 0.885 3.675 1.144 0.643 0.133 1.291 0.229 1.942 0.3 1.527 0.15 3.054 0.29 4.582 0.429l-7.681 20.925-9.571-1.611c-0.636-0.111-1.252-0.308-1.827-0.601-1.311-0.668-2.366-1.796-2.944-3.148-0.223-0.521-0.371-1.069-0.449-1.629-0.015-0.115-0.028-0.23-0.037-0.346-0.02-0.261-0.025-0.524-0.044-0.786-0.024-0.331-0.06-0.662-0.108-0.992-0.163-1.128-0.468-2.235-0.905-3.288-0.67-1.612-1.65-3.093-2.87-4.341-1.294-1.323-2.853-2.381-4.563-3.091-0.849-0.353-1.735-0.621-2.639-0.796-0.488-0.095-0.979-0.16-1.474-0.205-0.168-0.013-0.168-0.013-0.335-0.024-0.299-0.016-0.598-0.024-0.895-0.061-0.472-0.058-0.938-0.17-1.385-0.334-1.467-0.537-2.706-1.623-3.43-3.008-0.286-0.547-0.486-1.133-0.605-1.738-0.598-3.23-1.116-6.474-1.646-9.717m45.905 7.989c-2.119-0.193-4.239-0.382-6.357-0.59-0.42-0.045-0.837-0.107-1.251-0.193-0.808-0.166-1.599-0.412-2.359-0.734-1.57-0.665-3-1.653-4.18-2.885-1.025-1.069-1.86-2.319-2.453-3.677-0.348-0.797-0.612-1.631-0.787-2.483-0.086-0.414-0.148-0.831-0.194-1.251-0.207-2.118-0.396-4.238-0.589-6.357 0 0 14.199-5.212 22.625-8.305 1.097-0.403 2.329-0.132 3.155 0.695 0.827 0.826 1.098 2.058 0.695 3.155-3.093 8.426-8.305 22.625-8.305 22.625'
      />
    </g>
    <g id='create' transform='matrix(2.5744 0 0 2.5744 -.43455 58.533)'>
      <title>Create</title>
      <path
        className={create}
        d='m5.1 14.78h2.08v1.86c0 2.24-1.12 3.52-3.28 3.52s-3.28-1.28-3.28-3.52v-7.28c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52v1.36h-2.08v-1.5c0-1-0.44-1.38-1.14-1.38s-1.14 0.38-1.14 1.38v7.56c0 1 0.44 1.36 1.14 1.36s1.14-0.36 1.14-1.36v-2m12.821 5.22h-2.24c-0.12-0.36-0.2-0.58-0.2-1.72v-2.2c0-1.3-0.44-1.78-1.44-1.78h-0.76v5.7h-2.2v-14h3.32c2.28 0 3.26 1.06 3.26 3.22v1.1c0 1.44-0.46 2.36-1.44 2.82v0.04c1.1 0.46 1.46 1.5 1.46 2.96v2.16c0 0.68 0.02 1.18 0.24 1.7m-3.58-12h-1.06v4.3h0.86c0.82 0 1.32-0.36 1.32-1.48v-1.38c0-1-0.34-1.44-1.12-1.44m9.5407 0v3.9h3.02v2h-3.02v4.1h3.8v2h-6v-14h6v2h-3.8m12.601-2 2.24 14h-2.22l-0.38-2.54h-2.7l-0.38 2.54h-2.02l2.24-14h3.22m-1.74 2.48-1.04 7.08h2.12l-1.04-7.08h-0.04m6.9207-0.48v-2h6.8v2h-2.3v12h-2.2v-12h-2.3m12.521 0v3.9h3.02v2h-3.02v4.1h3.8v2h-6v-14h6v2h-3.8'
      />
    </g>
  </svg>
)

export default Create