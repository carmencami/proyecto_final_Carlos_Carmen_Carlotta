"""empty message

Revision ID: 4d973d05b08f
Revises: 3eda408297a2
Create Date: 2022-09-17 13:34:12.592935

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4d973d05b08f'
down_revision = '3eda408297a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('organizacion', 'avaiability',
               existing_type=sa.INTEGER(),
               type_=sa.String(length=30),
               existing_nullable=True)
    op.alter_column('organizacion', 'animals',
               existing_type=sa.INTEGER(),
               type_=sa.String(length=30),
               existing_nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('organizacion', 'animals',
               existing_type=sa.String(length=30),
               type_=sa.INTEGER(),
               existing_nullable=True)
    op.alter_column('organizacion', 'avaiability',
               existing_type=sa.String(length=30),
               type_=sa.INTEGER(),
               existing_nullable=True)
    # ### end Alembic commands ###