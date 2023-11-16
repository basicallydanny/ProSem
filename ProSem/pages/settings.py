from ProSem.templates import template

import reflex as rx

@template(route="/settings", title="Settings")
def settings() -> rx.Component:
    return rx.vstack(
        rx.heading("Settings", font_size="3em"),
        rx.text("Reflex")
    )
