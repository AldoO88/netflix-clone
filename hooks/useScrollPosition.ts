"use client";//Esta es una directiva que indica que este código debe ejecutarse en el navegador del cliente.

import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);//para guardar la posición de desplazamiento actual, con un valor inicial de 0

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);//devuelve la cantidad de píxeles que el documento ha sido desplazado verticalmente desde el borde superior de la ventana del navegador, y actualiza el estado scrollPosition con ese
    };

    window.addEventListener("scroll", updatePosition); //Aquí te suscribes al evento de desplazamiento del navegador ("scroll") para que cada vez que el usuario haga scroll, la función updatePosition sea llamada y actualice el estado scrollPosition.

    updatePosition();//Después de suscribirte al evento de desplazamiento, llamas a updatePosition una vez de inmediato para asegurarte de que scrollPosition tenga el valor correcto del desplazamiento al momento de montar el componente. Esto es útil porque si el usuario ya tiene un desplazamiento realizado al cargar la página, obtendrá la posición inicial correcta.

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };// Esta es la función de limpieza (cleanup) del efecto. Se ejecutará cuando el componente se desmonte o cuando el efecto necesite ejecutarse nuevamente (si las dependencias cambiaran, aunque en este caso no hay dependencias, ya que el array está vacío). Aquí, se desuscribe del evento de desplazamiento para evitar fugas de memoria o llamadas innecesarias después de que el componente ya no esté presente en el DOM.

  },[]);

  return scrollPosition;//Finalmente, el hook devuelve el valor actual de scrollPosition. Esto significa que cualquier componente que utilice este hook podrá acceder al valor de la posición del scroll actual y reaccionar a sus cambios.
}