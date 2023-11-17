import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import "katex/dist/katex.min.css"
import { Box, Center, Code, Heading, HStack, Image, Link, ListItem, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, OrderedList, Spacer, Text, UnorderedList, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import { Prism } from "react-syntax-highlighter"
import { light } from "/styles/code/prism"
import { HamburgerIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <HStack alignItems={`flex-start`} sx={{"transition": "left 0.5s, width 0.5s", "position": "relative"}}>
  <Box sx={{"display": ["none", "none", "block"], "minWidth": "20em", "height": "100%", "position": "sticky", "top": "0px", "borderRight": "1px solid #F4F3F6"}}>
  <VStack sx={{"height": "100dvh"}}>
  <HStack sx={{"width": "100%", "borderBottom": "1px solid #F4F3F6", "padding": "1em"}}>
  <Image src={`/icon.png`} sx={{"width": "150px", "height": "2em"}}/>
  <Spacer/>
  <Link as={NextLink} href={`https://mg-local.servicios.javerianacali.edu.co/`}>
  <Center sx={{"boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "bg": "transparent", "borderRadius": "0.375rem", "_hover": {"bg": "#F5EFFE"}}}>
  <Image src={`/favicon.ico`} sx={{"height": "3em", "padding": "0.5em"}}/>
</Center>
</Link>
</HStack>
  <VStack alignItems={`flex-start`} sx={{"width": "100%", "overflowY": "auto", "padding": "1em"}}>
  <Link as={NextLink} href={`/index`} sx={{"width": "100%"}}>
  <HStack sx={{"bg": isTrue((state.router.page.path === "/menu") || (((state.router.page.path === "/") && "Menu") === "Menu")) ? `#F5EFFE` : `transparent`, "color": isTrue((state.router.page.path === "/menu") || (((state.router.page.path === "/") && "Menu") === "Menu")) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingX": "1em"}}>
  <Image src={`/index.png`} sx={{"height": "2.5em", "padding": "0.5em"}}/>
  <Text>
  {`Menu`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`/inventario`} sx={{"width": "100%"}}>
  <HStack sx={{"bg": isTrue((state.router.page.path === "/inventario") || (((state.router.page.path === "/") && "Inventario") === "Menu")) ? `#F5EFFE` : `transparent`, "color": isTrue((state.router.page.path === "/inventario") || (((state.router.page.path === "/") && "Inventario") === "Menu")) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingX": "1em"}}>
  <Image src={`/inventario.png`} sx={{"height": "2.5em", "padding": "0.5em"}}/>
  <Text>
  {`Inventario`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`/proyecto`} sx={{"width": "100%"}}>
  <HStack sx={{"bg": isTrue((state.router.page.path === "/proyecto") || (((state.router.page.path === "/") && "Proyecto") === "Menu")) ? `#F5EFFE` : `transparent`, "color": isTrue((state.router.page.path === "/proyecto") || (((state.router.page.path === "/") && "Proyecto") === "Menu")) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingX": "1em"}}>
  <Image src={`/proyecto.png`} sx={{"height": "2.5em", "padding": "0.5em"}}/>
  <Text>
  {`Proyecto`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`/reservas`} sx={{"width": "100%"}}>
  <HStack sx={{"bg": isTrue((state.router.page.path === "/reservas") || (((state.router.page.path === "/") && "Reservas") === "Menu")) ? `#F5EFFE` : `transparent`, "color": isTrue((state.router.page.path === "/reservas") || (((state.router.page.path === "/") && "Reservas") === "Menu")) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingX": "1em"}}>
  <Image src={`/reservas.png`} sx={{"height": "2.5em", "padding": "0.5em"}}/>
  <Text>
  {`Reservas`}
</Text>
</HStack>
</Link>
</VStack>
  <Spacer/>
</VStack>
</Box>
  <Box sx={{"paddingTop": "5em", "paddingX": ["auto", "2em"]}}>
  <Box sx={{"width": "100%", "alignItems": "flex-start", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "borderRadius": "0.375rem", "padding": "1em", "marginBottom": "2em"}}>
  <ReactMarkdown components={{"h1": ({children, ...props}) => <Heading as={`h1`} size={`2xl`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h2": ({children, ...props}) => <Heading as={`h2`} size={`xl`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h3": ({children, ...props}) => <Heading as={`h3`} size={`lg`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h4": ({children, ...props}) => <Heading as={`h4`} size={`md`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h5": ({children, ...props}) => <Heading as={`h5`} size={`sm`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "h6": ({children, ...props}) => <Heading as={`h6`} size={`xs`} sx={{"marginY": "0.5em"}} {...props}>   {children} </Heading>, "p": ({children, ...props}) => <Text sx={{"marginY": "1em"}} {...props}>   {children} </Text>, "ul": ({children, ...props}) => <UnorderedList sx={{"marginY": "1em"}} {...props}>   {children} </UnorderedList>, "ol": ({children, ...props}) => <OrderedList sx={{"marginY": "1em"}} {...props}>   {children} </OrderedList>, "li": ({children, ...props}) => <ListItem sx={{"marginY": "0.5em"}} {...props}>   {children} </ListItem>, "a": ({children, ...props}) => <Link as={``} sx={{"fontWeight": "bold", "color": "#03030B", "textDecoration": "underline", "textDecorationColor": "#AD9BF8", "_hover": {"color": "#AD9BF8", "textDecoration": "underline", "textDecorationColor": "#03030B"}}} {...props}>   {children} </Link>, "code": ({inline, className, children, ...props}) => {     const match = (className || '').match(/language-(?<lang>.*)/);     const language = match ? match[1] : '';     return inline ? (         <Code sx={{"color": "#1F1944", "bg": "#EAE4FD"}} {...props}>   {children} </Code>     ) : (         <Prism customStyle={{"marginY": "1em"}} language={language} style={light} sx={{"marginY": "1em"}} {...props} children={String(children)}/>     );       }, "codeblock": ({children, ...props}) => <Prism customStyle={{"marginY": "1em"}} style={light} sx={{"marginY": "1em"}} {...props}/>}} rehypePlugins={[rehypeKatex, rehypeRaw]} remarkPlugins={[remarkMath, remarkGfm]}>
  {`# Contexto

Una Universidad cuenta con un servicio de transporte interno basado en robots y drones, los cuales son utilizados como prototipo para luego poder validar su funcionalidad en sitios de difícil acceso. 

Actualmente el sistema funciona de manera manual, ciertas personas ofrecen los servicios de acuerdo a cada necesidad particular. En estos momentos la demanda interna está creciendo y aunque se cuenta con tres personas en el equipo, cuando hay altas solicitudes no es posibles atenderlas de manera paralela (aunque se cuente con 6 dispositivos), ya que depende de que una persona se libere para manejar y configurar el dispositivo.

Llega entonces la necesidad de contar con un sistema de información centralizado que permita que estos robots y drones puedan ser configurados por un sistema general y que no dependa de una persona manejando cada artefacto de forma manual.

**Servicios que actualmente se ofrecen:**

- Transporte de objetos pequeños con los robots.

- Documentos entre oficinas, pedidos de cafeterías a personal administrativo.

- Con los drones se brinda el servicio de grabación de encuentros artísticos o deportivos en zonas abiertas.

### ¿Qué debe tener el sistema centralizado como mínimo?

* Administración e inventario de los dispositivos.

* Bitácora de los servicios.

* Hora de salida, hora de regreso, etc.

* Sistema de reserva para uso de los dispositivos

* Monitoreo centralizado del estado de los dispositivos antes, durante y al finalizar un servicio.

* Un monitoreo con datos como ubicación, batería, estado de sensores, estado del pedido/servicio, etc.

* Tanto los robots como los drones deben grabar su recorrido con sus respectivas cámaras.

* El objetivo es que estos vídeos queden guardados en algún servicio Cloud.

### Observaciones

El sistema es pensado para uso de los administradores de los dispositivos, no del cliente.

Puede suponer o añadir lo que considere necesario durante todo el proceso del proyecto.

El demo solo es a nivel de software, será necesario de alguna manera emular los datos del hardware, pero no se necesita sea parte del demo. Ejemplo: tengo los registros de vuelo de un drone ya registrados en la base de datos.

### Requisitos en Demo

| This | is   |
|------|------|
|   a  | table|`}
</ReactMarkdown>
</Box>
</Box>
  <Spacer/>
  <Box sx={{"position": "fixed", "right": "1.5em", "top": "1.5em", "zIndex": "500"}}>
  <Menu>
  <MenuButton sx={{"width": "3em", "height": "3em", "backgroundColor": "white", "border": "1px solid #F4F3F6", "borderRadius": "0.375rem"}}>
  <HamburgerIcon sx={{"size": "4em", "color": "black"}}/>
</MenuButton>
  <MenuList>
  <MenuItem sx={{"_hover": {"bg": "#F5EFFE"}}}>
  <Link as={NextLink} href={`/index`} sx={{"width": "100%"}}>
  {`Menu`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"bg": "#F5EFFE"}}}>
  <Link as={NextLink} href={`/inventario`} sx={{"width": "100%"}}>
  {`Inventario`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"bg": "#F5EFFE"}}}>
  <Link as={NextLink} href={`/proyecto`} sx={{"width": "100%"}}>
  {`Proyecto`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"bg": "#F5EFFE"}}}>
  <Link as={NextLink} href={`/reservas`} sx={{"width": "100%"}}>
  {`Reservas`}
</Link>
</MenuItem>
  <MenuDivider/>
  <MenuItem sx={{"_hover": {"bg": "#F5EFFE"}}}>
  <Link as={NextLink} href={`https://github.com/reflex-dev`} sx={{"width": "100%"}}>
  {`Github`}
</Link>
</MenuItem>
</MenuList>
</Menu>
</Box>
</HStack>
  <NextHead>
  <title>
  {`Proyecto`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
