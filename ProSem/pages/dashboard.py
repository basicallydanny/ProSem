from ProSem.templates import template

import reflex as rx

@template(route="/dashboard", title="Dashboard")
def dashboard() -> rx.Component:

    return rx.vstack(
        rx.heading("Dashboard", font_size="3em"),
        rx.text("Welcome")
    )
