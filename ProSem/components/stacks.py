
from ProSem import styles
from ProSem.state import State
import reflex as rx

def stacks(v: int) -> rx.Component:
    if v >= 50:
        color = "green"
    elif 0 < v and v > 10:
        color = "yellow"
    else:
        color = "red"
    label_text = f"{v}%"
    return rx.box(
        rx.circular_progress(
            rx.circular_progress_label(label_text, color=color),
            value=v,
            color=color
        )
    )

def stacks2(s: str) -> rx.Component:
    if s == "libre":
        color = "green"
    elif s == "ocupado":
        color = "blue"
    else:
        color = "yellow"
    return rx.box(
        rx.circular_progress(
            rx.circular_progress_label(s, color=color),
            color=color,
            is_indeterminate=True
        )
    )


def action_bar(pregunta: str, threshold: int) -> rx.Component:
    input_component = rx.input(placeholder=pregunta)
    button_component = rx.button("Confirmar")
    result_text = rx.text("")

    def handle_confirmar(event):
        input_value = input_component.value
        try:
            entered_value = int(input_value)
            if entered_value > threshold:
                result_text.text = f"El peso {entered_value} es mayor al {threshold}."
        except ValueError:
            result_text.text = "Inserta un valor válido."

    rx.on(button_component, "click", handle_confirmar)

    return rx.vstack(
        rx.box(
            input_component,
            button_component
        ),
        result_text
    )