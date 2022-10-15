from sqlalchemy import Integer, Column, Boolean
from sqlalchemy_serializer import SerializerMixin
from .db_session import SqlAlchemyBase
from sqlalchemy.orm import relationship


class Player(SqlAlchemyBase, SerializerMixin):
    __tablename__ = 'player'

    id = Column(Integer, primary_key=True, autoincrement=True)
    current_position = Column(Integer, default=0)
    skipping_move = Column(Boolean, default=False)


    def __repr__(self):
        return f'<Player> {self.id} Position: {self.current_position} Пропуск хода: {self.skipping_move}'