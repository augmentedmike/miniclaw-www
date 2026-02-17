"""Auto-aggregates all persona definitions from this package."""
import importlib
import pkgutil
from pathlib import Path

PERSONAS = []

for _finder, name, _ispkg in pkgutil.iter_modules([str(Path(__file__).parent)]):
    mod = importlib.import_module(f"personas.{name}")
    if hasattr(mod, "PERSONA"):
        PERSONAS.append(mod.PERSONA)
