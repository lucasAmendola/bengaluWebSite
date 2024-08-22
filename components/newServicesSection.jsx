// pages/index.js
"use client"

import { useEffect } from 'react';

const NewServicesSection = () => {
  useEffect(() => {
    
      const CONTAINER = document.querySelector('.container');
      const CARDS = document.querySelectorAll('article');

      const CONFIG = {
        proximity: 40,
        spread: 80,
        blur: 20,
        gap: 32,
        vertical: false,
        opacity: 0,
      };

      const PROXIMITY = 10;

      const UPDATE = (event) => {
        // Obtén el ángulo basado en el punto central de la tarjeta y la posición del puntero
        for (const CARD of CARDS) {
          // Verifica la tarjeta contra la proximidad y luego comienza a actualizar
          const CARD_BOUNDS = CARD.getBoundingClientRect();
          // Obtén la distancia entre el puntero y los límites exteriores de la tarjeta
          if (
            event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
            event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
            event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
            event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
          ) {
            // Si está dentro de la proximidad, establece la opacidad activa
            CARD.style.setProperty('--active', 1);
          } else {
            CARD.style.setProperty('--active', CONFIG.opacity);
          }
          const CARD_CENTER = [
            CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
            CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
          ];
          let ANGLE = (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) * 180) / Math.PI;
          ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;
          CARD.style.setProperty('--start', ANGLE + 90);
        }
      };

      document.body.addEventListener('pointermove', UPDATE);

      const RESTYLE = () => {
        CONTAINER.style.setProperty('--gap', CONFIG.gap);
        CONTAINER.style.setProperty('--blur', CONFIG.blur);
        CONTAINER.style.setProperty('--spread', CONFIG.spread);
        CONTAINER.style.setProperty('--direction', CONFIG.vertical ? 'column' : 'row');
      };

      RESTYLE();
      UPDATE();

      // Cleanup function
      return () => {
        document.body.removeEventListener('pointermove', UPDATE);
      };
 
  }, []);

  return (
    
    <div class='iluminateCardsSection'>
      
      <h1>¿Cómo podemos ayudarte?</h1>

      <div class="container">
            <article>
                <div className='contenedCard'>
                    <div class="glows"></div>
                    <h2>Agilidad</h2>
                    <span class="header">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
                                stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                                <path d="M6.34315 17.6569C5.22433 16.538 4.4624 15.1126 4.15372 13.5607C3.84504 12.0089 4.00346 10.4003 4.60896 8.93853C5.21446 7.47672 6.23984 6.22729 7.55544 5.34824C8.87103 4.46919 10.4177 4 12 4C13.5823 4 15.129 4.46919 16.4446 5.34824C17.7602 6.22729 18.7855 7.47672 19.391 8.93853C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 12L16 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                            </g>
                        </svg>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
                                stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                                <path d="M6.34315 17.6569C5.22433 16.538 4.4624 15.1126 4.15372 13.5607C3.84504 12.0089 4.00346 10.4003 4.60896 8.93853C5.21446 7.47672 6.23984 6.22729 7.55544 5.34824C8.87103 4.46919 10.4177 4 12 4C13.5823 4 15.129 4.46919 16.4446 5.34824C17.7602 6.22729 18.7855 7.47672 19.391 8.93853C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 12L16 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                            </g>
                        </svg>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
                                stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                                <path d="M6.34315 17.6569C5.22433 16.538 4.4624 15.1126 4.15372 13.5607C3.84504 12.0089 4.00346 10.4003 4.60896 8.93853C5.21446 7.47672 6.23984 6.22729 7.55544 5.34824C8.87103 4.46919 10.4177 4 12 4C13.5823 4 15.129 4.46919 16.4446 5.34824C17.7602 6.22729 18.7855 7.47672 19.391 8.93853C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 12L16 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                            </g>
                        </svg>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" 
                                stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> 
                                <path d="M6.34315 17.6569C5.22433 16.538 4.4624 15.1126 4.15372 13.5607C3.84504 12.0089 4.00346 10.4003 4.60896 8.93853C5.21446 7.47672 6.23984 6.22729 7.55544 5.34824C8.87103 4.46919 10.4177 4 12 4C13.5823 4 15.129 4.46919 16.4446 5.34824C17.7602 6.22729 18.7855 7.47672 19.391 8.93853C19.9965 10.4003 20.155 12.0089 19.8463 13.5607C19.5376 15.1126 18.7757 16.538 17.6569 17.6569" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M12 12L16 10" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                            </g>
                        </svg>
                    </span>
                </div>
                <p className='parrafoCaIl'>Trabajamos con los mejores recursos para encontrar soluciones rápidamente.</p>
            </article>

            <article>
                <h2>Costos</h2>
                <div class="glows"></div>
                <span class="header">
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><defs></defs>
                        <path class="a" d="M8.0723,20.7261a12.4759,12.4759,0,0,1,3.6466-5.6695c-.9317-.7453,0-5.3767,0-5.3767s3.7264,1.65,4.3918,2.4221c0,0,2.8747-3.4868,11.2059-3.4868S43.5,15.0566,43.5,23.654s-6.2285,11.339-6.2285,11.339a19.9775,19.9775,0,0,1-1.4905,4.3918H32.48A21.3853,21.3853,0,0,1,31.07,36.8562s-2.6351.3194-4.525.3194a23.0513,23.0513,0,0,1-3.966-.4259,6.4031,6.4031,0,0,1-.9316,2.6351H18.0538c-1.1179-.9582-1.6769-3.9659-1.6769-3.9659S7.327,31.32,5.4105,28.871c-1.038-1.9431-.905-6.2551-.905-6.2551A7.9406,7.9406,0,0,1,8.0723,20.7261Z"></path>
                        <path class="a" d="M19.5444,13.7789a11.5482,11.5482,0,0,1,7.3464-2.156,13.1871,13.1871,0,0,1,7.9852,2.5287"></path>
                        <circle class="b" cx="11.6124" cy="21.285" r="0.75"></circle></g>
                    </svg>
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><defs></defs>
                        <path class="a" d="M8.0723,20.7261a12.4759,12.4759,0,0,1,3.6466-5.6695c-.9317-.7453,0-5.3767,0-5.3767s3.7264,1.65,4.3918,2.4221c0,0,2.8747-3.4868,11.2059-3.4868S43.5,15.0566,43.5,23.654s-6.2285,11.339-6.2285,11.339a19.9775,19.9775,0,0,1-1.4905,4.3918H32.48A21.3853,21.3853,0,0,1,31.07,36.8562s-2.6351.3194-4.525.3194a23.0513,23.0513,0,0,1-3.966-.4259,6.4031,6.4031,0,0,1-.9316,2.6351H18.0538c-1.1179-.9582-1.6769-3.9659-1.6769-3.9659S7.327,31.32,5.4105,28.871c-1.038-1.9431-.905-6.2551-.905-6.2551A7.9406,7.9406,0,0,1,8.0723,20.7261Z"></path>
                        <path class="a" d="M19.5444,13.7789a11.5482,11.5482,0,0,1,7.3464-2.156,13.1871,13.1871,0,0,1,7.9852,2.5287"></path>
                        <circle class="b" cx="11.6124" cy="21.285" r="0.75"></circle></g>
                    </svg>
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><defs></defs>
                        <path class="a" d="M8.0723,20.7261a12.4759,12.4759,0,0,1,3.6466-5.6695c-.9317-.7453,0-5.3767,0-5.3767s3.7264,1.65,4.3918,2.4221c0,0,2.8747-3.4868,11.2059-3.4868S43.5,15.0566,43.5,23.654s-6.2285,11.339-6.2285,11.339a19.9775,19.9775,0,0,1-1.4905,4.3918H32.48A21.3853,21.3853,0,0,1,31.07,36.8562s-2.6351.3194-4.525.3194a23.0513,23.0513,0,0,1-3.966-.4259,6.4031,6.4031,0,0,1-.9316,2.6351H18.0538c-1.1179-.9582-1.6769-3.9659-1.6769-3.9659S7.327,31.32,5.4105,28.871c-1.038-1.9431-.905-6.2551-.905-6.2551A7.9406,7.9406,0,0,1,8.0723,20.7261Z"></path>
                        <path class="a" d="M19.5444,13.7789a11.5482,11.5482,0,0,1,7.3464-2.156,13.1871,13.1871,0,0,1,7.9852,2.5287"></path>
                        <circle class="b" cx="11.6124" cy="21.285" r="0.75"></circle></g>
                    </svg>
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"><defs></defs>
                        <path class="a" d="M8.0723,20.7261a12.4759,12.4759,0,0,1,3.6466-5.6695c-.9317-.7453,0-5.3767,0-5.3767s3.7264,1.65,4.3918,2.4221c0,0,2.8747-3.4868,11.2059-3.4868S43.5,15.0566,43.5,23.654s-6.2285,11.339-6.2285,11.339a19.9775,19.9775,0,0,1-1.4905,4.3918H32.48A21.3853,21.3853,0,0,1,31.07,36.8562s-2.6351.3194-4.525.3194a23.0513,23.0513,0,0,1-3.966-.4259,6.4031,6.4031,0,0,1-.9316,2.6351H18.0538c-1.1179-.9582-1.6769-3.9659-1.6769-3.9659S7.327,31.32,5.4105,28.871c-1.038-1.9431-.905-6.2551-.905-6.2551A7.9406,7.9406,0,0,1,8.0723,20.7261Z"></path>
                        <path class="a" d="M19.5444,13.7789a11.5482,11.5482,0,0,1,7.3464-2.156,13.1871,13.1871,0,0,1,7.9852,2.5287"></path>
                        <circle class="b" cx="11.6124" cy="21.285" r="0.75"></circle></g>
                    </svg>
                </span>
                <p className='parrafoCaIl'>Te ayudamos a definir el presupuesto de acuerdo a tus necesidades.</p>
            </article>

            <article>
                <h2>Confiabilidad</h2>
                <div class="glows"></div>
                <span class="header">
                    <svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.01 512.01" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g> <g> 
                        <path d="M347.371,207.307l-25.6-25.6c-3.337-3.337-8.73-3.337-12.066,0l-87.834,87.834l-28.1-28.1 c-3.337-3.337-8.73-3.337-12.066,0l-25.6,25.6c-3.337,3.336-3.337,8.73,0,12.066l59.733,59.733c1.664,1.673,3.849,2.5,6.033,2.5 c2.185,0,4.369-0.836,6.033-2.5l119.467-119.467C350.708,216.037,350.708,210.644,347.371,207.307z M221.871,320.741 l-47.667-47.667l13.534-13.534l28.1,28.1c3.337,3.337,8.73,3.337,12.066,0l87.834-87.834l13.534,13.534L221.871,320.741z"></path> </g> </g> <g> <g> 
                        <path d="M510.025,301.746l-38.11-45.739l38.11-45.739c2.125-2.543,2.577-6.084,1.178-9.079c-1.408-2.995-4.42-4.915-7.731-4.915 H391.403l-7.484-52.403c-0.597-4.207-4.198-7.33-8.448-7.33h-65.178c-10.052-8.38-48.828-40.687-48.828-40.687 c-3.166-2.645-7.757-2.645-10.923,0l-48.828,40.687h-65.178c-4.25,0-7.842,3.123-8.448,7.322l-7.484,52.412H8.538 c-3.311,0-6.323,1.92-7.731,4.915c-1.408,3.004-0.947,6.545,1.178,9.079l38.11,45.739l-38.11,45.739 c-2.125,2.543-2.577,6.084-1.178,9.079c1.408,3.004,4.42,4.915,7.731,4.915h112.068c2.278,15.915,7.492,52.412,7.492,52.412 c0.597,4.207,4.198,7.322,8.439,7.322h65.178l48.828,40.687c1.587,1.323,3.524,1.98,5.461,1.98s3.883-0.657,5.461-1.98 l48.819-40.687c13.261,0,65.203,0.034,65.186,0c4.25,0,7.842-3.123,8.448-7.322c0,0,5.214-36.497,7.492-52.412h112.06 c3.311,0,6.323-1.92,7.731-4.915C512.611,307.821,512.15,304.28,510.025,301.746z M26.757,298.674l31.002-37.205 c2.637-3.166,2.637-7.765,0-10.923L26.757,213.34h83.029l-31.002,37.205c-2.637,3.166-2.637,7.765,0,10.923l31.002,37.205H26.757z M377.46,301.737c-0.418,0.503-0.785,1.058-1.075,1.647c-0.597,1.195-0.623,1.246-8.303,55.023 c-62.882,0-62.942,0.034-64.691,0.905c-0.589,0.299-1.143,0.657-1.647,1.075l-45.739,38.11l-45.739-38.11 c-1.527-1.28-3.465-1.98-5.461-1.98h-60.868c-7.68-53.777-7.706-53.828-8.303-55.023c-0.299-0.589-0.657-1.143-1.075-1.647 l-38.11-45.73l38.11-45.739c1.016-1.22,1.673-2.688,1.894-4.258l7.484-52.403h60.868c1.997,0,3.925-0.7,5.461-1.98l45.739-38.11 c46.49,38.741,46.524,38.758,47.386,39.194c1.186,0.589,2.492,0.896,3.814,0.896h60.868l7.484,52.412 c0.222,1.57,0.879,3.038,1.894,4.258l38.11,45.73L377.46,301.737z M402.223,298.674l31.002-37.205 c2.637-3.166,2.637-7.765,0-10.923l-31.002-37.205h83.029l-31.002,37.205c-2.637,3.166-2.637,7.765,0,10.923l31.002,37.205 H402.223z"></path> </g> </g> </g>
                    </svg>
                    <svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.01 512.01" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g> <g> 
                        <path d="M347.371,207.307l-25.6-25.6c-3.337-3.337-8.73-3.337-12.066,0l-87.834,87.834l-28.1-28.1 c-3.337-3.337-8.73-3.337-12.066,0l-25.6,25.6c-3.337,3.336-3.337,8.73,0,12.066l59.733,59.733c1.664,1.673,3.849,2.5,6.033,2.5 c2.185,0,4.369-0.836,6.033-2.5l119.467-119.467C350.708,216.037,350.708,210.644,347.371,207.307z M221.871,320.741 l-47.667-47.667l13.534-13.534l28.1,28.1c3.337,3.337,8.73,3.337,12.066,0l87.834-87.834l13.534,13.534L221.871,320.741z"></path> </g> </g> <g> <g> 
                        <path d="M510.025,301.746l-38.11-45.739l38.11-45.739c2.125-2.543,2.577-6.084,1.178-9.079c-1.408-2.995-4.42-4.915-7.731-4.915 H391.403l-7.484-52.403c-0.597-4.207-4.198-7.33-8.448-7.33h-65.178c-10.052-8.38-48.828-40.687-48.828-40.687 c-3.166-2.645-7.757-2.645-10.923,0l-48.828,40.687h-65.178c-4.25,0-7.842,3.123-8.448,7.322l-7.484,52.412H8.538 c-3.311,0-6.323,1.92-7.731,4.915c-1.408,3.004-0.947,6.545,1.178,9.079l38.11,45.739l-38.11,45.739 c-2.125,2.543-2.577,6.084-1.178,9.079c1.408,3.004,4.42,4.915,7.731,4.915h112.068c2.278,15.915,7.492,52.412,7.492,52.412 c0.597,4.207,4.198,7.322,8.439,7.322h65.178l48.828,40.687c1.587,1.323,3.524,1.98,5.461,1.98s3.883-0.657,5.461-1.98 l48.819-40.687c13.261,0,65.203,0.034,65.186,0c4.25,0,7.842-3.123,8.448-7.322c0,0,5.214-36.497,7.492-52.412h112.06 c3.311,0,6.323-1.92,7.731-4.915C512.611,307.821,512.15,304.28,510.025,301.746z M26.757,298.674l31.002-37.205 c2.637-3.166,2.637-7.765,0-10.923L26.757,213.34h83.029l-31.002,37.205c-2.637,3.166-2.637,7.765,0,10.923l31.002,37.205H26.757z M377.46,301.737c-0.418,0.503-0.785,1.058-1.075,1.647c-0.597,1.195-0.623,1.246-8.303,55.023 c-62.882,0-62.942,0.034-64.691,0.905c-0.589,0.299-1.143,0.657-1.647,1.075l-45.739,38.11l-45.739-38.11 c-1.527-1.28-3.465-1.98-5.461-1.98h-60.868c-7.68-53.777-7.706-53.828-8.303-55.023c-0.299-0.589-0.657-1.143-1.075-1.647 l-38.11-45.73l38.11-45.739c1.016-1.22,1.673-2.688,1.894-4.258l7.484-52.403h60.868c1.997,0,3.925-0.7,5.461-1.98l45.739-38.11 c46.49,38.741,46.524,38.758,47.386,39.194c1.186,0.589,2.492,0.896,3.814,0.896h60.868l7.484,52.412 c0.222,1.57,0.879,3.038,1.894,4.258l38.11,45.73L377.46,301.737z M402.223,298.674l31.002-37.205 c2.637-3.166,2.637-7.765,0-10.923l-31.002-37.205h83.029l-31.002,37.205c-2.637,3.166-2.637,7.765,0,10.923l31.002,37.205 H402.223z"></path> </g> </g> </g>
                    </svg>
                    <svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.01 512.01" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g> <g> 
                        <path d="M347.371,207.307l-25.6-25.6c-3.337-3.337-8.73-3.337-12.066,0l-87.834,87.834l-28.1-28.1 c-3.337-3.337-8.73-3.337-12.066,0l-25.6,25.6c-3.337,3.336-3.337,8.73,0,12.066l59.733,59.733c1.664,1.673,3.849,2.5,6.033,2.5 c2.185,0,4.369-0.836,6.033-2.5l119.467-119.467C350.708,216.037,350.708,210.644,347.371,207.307z M221.871,320.741 l-47.667-47.667l13.534-13.534l28.1,28.1c3.337,3.337,8.73,3.337,12.066,0l87.834-87.834l13.534,13.534L221.871,320.741z"></path> </g> </g> <g> <g> 
                        <path d="M510.025,301.746l-38.11-45.739l38.11-45.739c2.125-2.543,2.577-6.084,1.178-9.079c-1.408-2.995-4.42-4.915-7.731-4.915 H391.403l-7.484-52.403c-0.597-4.207-4.198-7.33-8.448-7.33h-65.178c-10.052-8.38-48.828-40.687-48.828-40.687 c-3.166-2.645-7.757-2.645-10.923,0l-48.828,40.687h-65.178c-4.25,0-7.842,3.123-8.448,7.322l-7.484,52.412H8.538 c-3.311,0-6.323,1.92-7.731,4.915c-1.408,3.004-0.947,6.545,1.178,9.079l38.11,45.739l-38.11,45.739 c-2.125,2.543-2.577,6.084-1.178,9.079c1.408,3.004,4.42,4.915,7.731,4.915h112.068c2.278,15.915,7.492,52.412,7.492,52.412 c0.597,4.207,4.198,7.322,8.439,7.322h65.178l48.828,40.687c1.587,1.323,3.524,1.98,5.461,1.98s3.883-0.657,5.461-1.98 l48.819-40.687c13.261,0,65.203,0.034,65.186,0c4.25,0,7.842-3.123,8.448-7.322c0,0,5.214-36.497,7.492-52.412h112.06 c3.311,0,6.323-1.92,7.731-4.915C512.611,307.821,512.15,304.28,510.025,301.746z M26.757,298.674l31.002-37.205 c2.637-3.166,2.637-7.765,0-10.923L26.757,213.34h83.029l-31.002,37.205c-2.637,3.166-2.637,7.765,0,10.923l31.002,37.205H26.757z M377.46,301.737c-0.418,0.503-0.785,1.058-1.075,1.647c-0.597,1.195-0.623,1.246-8.303,55.023 c-62.882,0-62.942,0.034-64.691,0.905c-0.589,0.299-1.143,0.657-1.647,1.075l-45.739,38.11l-45.739-38.11 c-1.527-1.28-3.465-1.98-5.461-1.98h-60.868c-7.68-53.777-7.706-53.828-8.303-55.023c-0.299-0.589-0.657-1.143-1.075-1.647 l-38.11-45.73l38.11-45.739c1.016-1.22,1.673-2.688,1.894-4.258l7.484-52.403h60.868c1.997,0,3.925-0.7,5.461-1.98l45.739-38.11 c46.49,38.741,46.524,38.758,47.386,39.194c1.186,0.589,2.492,0.896,3.814,0.896h60.868l7.484,52.412 c0.222,1.57,0.879,3.038,1.894,4.258l38.11,45.73L377.46,301.737z M402.223,298.674l31.002-37.205 c2.637-3.166,2.637-7.765,0-10.923l-31.002-37.205h83.029l-31.002,37.205c-2.637,3.166-2.637,7.765,0,10.923l31.002,37.205 H402.223z"></path> </g> </g> </g>
                    </svg>
                    <svg fill="#ffffff" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512.01 512.01" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g> <g> 
                        <path d="M347.371,207.307l-25.6-25.6c-3.337-3.337-8.73-3.337-12.066,0l-87.834,87.834l-28.1-28.1 c-3.337-3.337-8.73-3.337-12.066,0l-25.6,25.6c-3.337,3.336-3.337,8.73,0,12.066l59.733,59.733c1.664,1.673,3.849,2.5,6.033,2.5 c2.185,0,4.369-0.836,6.033-2.5l119.467-119.467C350.708,216.037,350.708,210.644,347.371,207.307z M221.871,320.741 l-47.667-47.667l13.534-13.534l28.1,28.1c3.337,3.337,8.73,3.337,12.066,0l87.834-87.834l13.534,13.534L221.871,320.741z"></path> </g> </g> <g> <g> 
                        <path d="M510.025,301.746l-38.11-45.739l38.11-45.739c2.125-2.543,2.577-6.084,1.178-9.079c-1.408-2.995-4.42-4.915-7.731-4.915 H391.403l-7.484-52.403c-0.597-4.207-4.198-7.33-8.448-7.33h-65.178c-10.052-8.38-48.828-40.687-48.828-40.687 c-3.166-2.645-7.757-2.645-10.923,0l-48.828,40.687h-65.178c-4.25,0-7.842,3.123-8.448,7.322l-7.484,52.412H8.538 c-3.311,0-6.323,1.92-7.731,4.915c-1.408,3.004-0.947,6.545,1.178,9.079l38.11,45.739l-38.11,45.739 c-2.125,2.543-2.577,6.084-1.178,9.079c1.408,3.004,4.42,4.915,7.731,4.915h112.068c2.278,15.915,7.492,52.412,7.492,52.412 c0.597,4.207,4.198,7.322,8.439,7.322h65.178l48.828,40.687c1.587,1.323,3.524,1.98,5.461,1.98s3.883-0.657,5.461-1.98 l48.819-40.687c13.261,0,65.203,0.034,65.186,0c4.25,0,7.842-3.123,8.448-7.322c0,0,5.214-36.497,7.492-52.412h112.06 c3.311,0,6.323-1.92,7.731-4.915C512.611,307.821,512.15,304.28,510.025,301.746z M26.757,298.674l31.002-37.205 c2.637-3.166,2.637-7.765,0-10.923L26.757,213.34h83.029l-31.002,37.205c-2.637,3.166-2.637,7.765,0,10.923l31.002,37.205H26.757z M377.46,301.737c-0.418,0.503-0.785,1.058-1.075,1.647c-0.597,1.195-0.623,1.246-8.303,55.023 c-62.882,0-62.942,0.034-64.691,0.905c-0.589,0.299-1.143,0.657-1.647,1.075l-45.739,38.11l-45.739-38.11 c-1.527-1.28-3.465-1.98-5.461-1.98h-60.868c-7.68-53.777-7.706-53.828-8.303-55.023c-0.299-0.589-0.657-1.143-1.075-1.647 l-38.11-45.73l38.11-45.739c1.016-1.22,1.673-2.688,1.894-4.258l7.484-52.403h60.868c1.997,0,3.925-0.7,5.461-1.98l45.739-38.11 c46.49,38.741,46.524,38.758,47.386,39.194c1.186,0.589,2.492,0.896,3.814,0.896h60.868l7.484,52.412 c0.222,1.57,0.879,3.038,1.894,4.258l38.11,45.73L377.46,301.737z M402.223,298.674l31.002-37.205 c2.637-3.166,2.637-7.765,0-10.923l-31.002-37.205h83.029l-31.002,37.205c-2.637,3.166-2.637,7.765,0,10.923l31.002,37.205 H402.223z"></path> </g> </g> </g>
                    </svg>
                </span>
                <p className='parrafoCaIl'>Estamos dispuestos a brindar servicios de alta calidad que aseguran el éxito de su proyecto.</p>
            </article>

            <article>
                <h2>Compromiso</h2>
                <div class="glows"></div>
                <span class="header">
                    <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 256 203" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <path d="M84.2,2.4c18.7,0,33.8,15.1,33.8,33.8S102.9,70,84.2,70S50.4,54.9,50.4,36.2S65.5,2.4,84.2,2.4z M156.3,122.2l-21.8,63H88.6 v-3.9c0-6.5-5.3-11.8-11.8-11.8H33.5v-43.3c0-2.2,1.8-3.9,3.9-3.9s3.9,1.8,3.9,3.9v35.4h35.4c9.5,0,17.5,6.8,19.3,15.8h32.8 l17.7-51.4c-4.4-9.1-8.9-18.3-12.3-24.4c-6.7-14.4-21.4-24.4-38.3-24.4H44.2C20.9,77.1,2,96.1,2,119.3v63.6 c0,9.8,7.9,17.7,17.7,17.7H227l3.6-10.3l23.4-68.1H156.3z M197.6,168.1c-4.3,0-7.8-2.2-7.8-5c0-2.8,3.5-5,7.8-5c4.3,0,7.8,2.2,7.8,5 C205.4,165.8,201.9,168.1,197.6,168.1z"></path> </g>
                    </svg>
                    <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 256 203" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <path d="M84.2,2.4c18.7,0,33.8,15.1,33.8,33.8S102.9,70,84.2,70S50.4,54.9,50.4,36.2S65.5,2.4,84.2,2.4z M156.3,122.2l-21.8,63H88.6 v-3.9c0-6.5-5.3-11.8-11.8-11.8H33.5v-43.3c0-2.2,1.8-3.9,3.9-3.9s3.9,1.8,3.9,3.9v35.4h35.4c9.5,0,17.5,6.8,19.3,15.8h32.8 l17.7-51.4c-4.4-9.1-8.9-18.3-12.3-24.4c-6.7-14.4-21.4-24.4-38.3-24.4H44.2C20.9,77.1,2,96.1,2,119.3v63.6 c0,9.8,7.9,17.7,17.7,17.7H227l3.6-10.3l23.4-68.1H156.3z M197.6,168.1c-4.3,0-7.8-2.2-7.8-5c0-2.8,3.5-5,7.8-5c4.3,0,7.8,2.2,7.8,5 C205.4,165.8,201.9,168.1,197.6,168.1z"></path> </g>
                    </svg>
                    <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 256 203" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <path d="M84.2,2.4c18.7,0,33.8,15.1,33.8,33.8S102.9,70,84.2,70S50.4,54.9,50.4,36.2S65.5,2.4,84.2,2.4z M156.3,122.2l-21.8,63H88.6 v-3.9c0-6.5-5.3-11.8-11.8-11.8H33.5v-43.3c0-2.2,1.8-3.9,3.9-3.9s3.9,1.8,3.9,3.9v35.4h35.4c9.5,0,17.5,6.8,19.3,15.8h32.8 l17.7-51.4c-4.4-9.1-8.9-18.3-12.3-24.4c-6.7-14.4-21.4-24.4-38.3-24.4H44.2C20.9,77.1,2,96.1,2,119.3v63.6 c0,9.8,7.9,17.7,17.7,17.7H227l3.6-10.3l23.4-68.1H156.3z M197.6,168.1c-4.3,0-7.8-2.2-7.8-5c0-2.8,3.5-5,7.8-5c4.3,0,7.8,2.2,7.8,5 C205.4,165.8,201.9,168.1,197.6,168.1z"></path> </g>
                    </svg>
                    <svg fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 256 203" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <path d="M84.2,2.4c18.7,0,33.8,15.1,33.8,33.8S102.9,70,84.2,70S50.4,54.9,50.4,36.2S65.5,2.4,84.2,2.4z M156.3,122.2l-21.8,63H88.6 v-3.9c0-6.5-5.3-11.8-11.8-11.8H33.5v-43.3c0-2.2,1.8-3.9,3.9-3.9s3.9,1.8,3.9,3.9v35.4h35.4c9.5,0,17.5,6.8,19.3,15.8h32.8 l17.7-51.4c-4.4-9.1-8.9-18.3-12.3-24.4c-6.7-14.4-21.4-24.4-38.3-24.4H44.2C20.9,77.1,2,96.1,2,119.3v63.6 c0,9.8,7.9,17.7,17.7,17.7H227l3.6-10.3l23.4-68.1H156.3z M197.6,168.1c-4.3,0-7.8-2.2-7.8-5c0-2.8,3.5-5,7.8-5c4.3,0,7.8,2.2,7.8,5 C205.4,165.8,201.9,168.1,197.6,168.1z"></path> </g>
                    </svg>
                </span>
                <p className='parrafoCaIl'>Trabajamos con el unico y mas importante objetivo, brindarte soluciones acordes a tus necesidades.</p>
            </article>

        </div>    
    </div>
  );
};

export default NewServicesSection;