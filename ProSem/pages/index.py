from ProSem import styles
from ProSem.templates import template
import reflex as rx

@template(route="/index", title="Menu")
def index() -> rx.Component:
    return rx.vstack(
        rx.heading("Dashboard", font_size="3em"),
        rx.text("Welcome")
    )
    
