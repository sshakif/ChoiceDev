<?php

declare(strict_types=1);

namespace Flat3\Lodata\Helper;

use Doctrine\DBAL\Connection as DoctrineConnection;
use Doctrine\DBAL\Schema\Table;
use Illuminate\Database\ConnectionInterface;
use PDO;

abstract class DBAL
{
    protected $connection;

    public function __construct(ConnectionInterface $connection)
    {
        $this->connection = new DoctrineConnection([
            'pdo' => $connection->getPdo(),
        ], $this->getDoctrineDriver($connection));
    }

    public function getDatabasePlatform()
    {
        return $this->connection->getDatabasePlatform();
    }

    abstract public function listTableDetails(string $table): Table;

    abstract protected function getDoctrineDriver(ConnectionInterface $connection);

    public function quoteSingleIdentifier(string $identifier): string
    {
        return $this->connection->quoteIdentifier($identifier);
    }
}