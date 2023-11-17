from ProSem.templates import template
import reflex as rx

@template(route="/reservas", title="Reservas")
def reservas() -> rx.Component:
    return rx.vstack(
        rx.heading("Resevas", font_size="3em"),
        rx.text("Welcome")
    )
