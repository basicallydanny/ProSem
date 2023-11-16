from __future__ import annotations

from ProSem import styles
from ProSem.components.sidebar import sidebar
from typing import Callable

import reflex as rx

default_meta = [
    {
        "name": "viewport",
        "content": "width=device-width, shrink-to-fit=no, initial-scale=1",
    },
]

def menu_button() -> rx.Component:
    from reflex.page import get_decorated_pages
    return rx.box(
        rx.menu(
            rx.menu_button(
                rx.icon(
                    tag="hamburger",
                    size="4em",
                    color=styles.text_color,
                ),
            ),
            rx.menu_list(
                *[
                    rx.menu_item(
                        rx.link(
                            page["title"],
                            href=page["route"],
                            width="100%",
                        )
                    )
                    for page in get_decorated_pages()
                ],
                rx.menu_divider(),
                rx.menu_item(
                    rx.link("Github", href="https://github.com/reflex-dev", width="100%")
                ),
            ),
        ),
        position="fixed",
        right="1.5em",
        top="1.5em",
        z_index="500",
    )

def template(
    route: str | None = None,
    title: str | None = None,
    image: str | None = None,
    description: str | None = None,
    meta: str | None = None,
    script_tags: list[rx.Component] | None = None,
    on_load: rx.event.EventHandler | list[rx.event.EventHandler] | None = None,
) -> Callable[[Callable[[], rx.Component]], rx.Component]:
    def decorator(page_content: Callable[[], rx.Component]) -> rx.Component:
        all_meta = [*default_meta, *(meta or [])]
        @rx.page(
            route=route,
            title=title,
            image=image,
            description=description,
            meta=all_meta,
            script_tags=script_tags,
            on_load=on_load,
        )
        def templated_page():
            return rx.hstack(
                sidebar(),
                rx.box(
                    rx.box(
                        page_content(),
                        **styles.template_content_style,
                    ),
                    **styles.template_page_style,
                ),
                rx.spacer(),
                menu_button(),
                align_items="flex-start",
                transition="left 0.5s, width 0.5s",
                position="relative",
            )
        return templated_page
    return decorator
