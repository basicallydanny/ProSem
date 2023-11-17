from ProSem import styles
from ProSem.templates import template

import reflex as rx

@template(route="/proyecto", title="Proyecto")
def proyecto() -> rx.Component:
    with open("README.md", encoding="utf-8") as readme:
        content = readme.read()
    return rx.markdown(content, component_map=styles.markdown_style)