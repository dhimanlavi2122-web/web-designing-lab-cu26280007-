from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import declarative_base, sessionmaker
from getpass import getpass
from urllib.parse import quote_plus

password = quote_plus(getpass("Enter MySQL password: "))

engine = create_engine(
    f"mysql+mysqlconnector://root:{password}@localhost:3306/python_web_db"
)

Base = declarative_base()


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)


Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

try:
    student = Student(
        name="Lavisha",
        email="lavisha@example.com"
    )

    session.add(student)
    session.commit()

    print("Student added successfully!")

    students = session.query(Student).all()

    print("\nStudent Records:")
    for s in students:
        print(s.id, s.name, s.email)

except Exception as error:
    session.rollback()
    print("Error:", error)

finally:
    session.close()
    engine.dispose()